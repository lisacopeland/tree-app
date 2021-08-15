import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, TreeDragDropService, TreeNode } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FileService } from './file.service';
import { MyTreeNode, File } from './files.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TreeDragDropService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tree-app';
  files: File[] = [];
  treeNodes: TreeNode[];
  unFilteredNodes: TreeNode[];
  selectedFiles: TreeNode[];
  sub: Subscription;
  status = '';
  context = '';
  menuItems: MenuItem[] = [
    {
      label: 'Download',
      icon: 'pi pi-download',
      command: (event) => this.stubMethod('download', this.selectedFiles),
    },
    {
      label: 'Archive',
      icon: 'pi pi-briefcase',
      command: (event) => this.stubMethod('archive', this.selectedFiles),
    },
    {
      label: 'Delete',
      icon: 'pi pi-send',
      command: (event) => this.stubMethod('delete', this.selectedFiles),
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: (event) => this.stubMethod('edit', this.selectedFiles),
    },
  ];

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.sub = this.fileService.getFiles().subscribe((files) => {
      this.files = files;
      this.createTree();
    });
  }

  stubMethod(action: string, selectedFiles: TreeNode[]) {
    console.log('these were selected for ' + action);
    selectedFiles.forEach((x) => {
      console.log(x.label);
    });
  }

  filterContext(context: string) {
    this.context = context;
    this.createTree();
    this.expandToggle(true);
  }

  clearContext() {
    this.context = '';
    this.createTree();
  }

  filterStatus(status: string) {
    this.status = status;
    this.createTree();
    this.expandToggle(true);
  }

  clearStatus() {
    this.status = '';
    this.createTree();
  }

  createTree() {
    if (this.files.length) {
      const rootNode = this.fileService.convertFilestoNodes(
        this.files,
        this.context,
        this.status
      );

      this.treeNodes = [rootNode];
    } else {
      this.treeNodes = [];
    }
  }

  nodeSelect(event: any) {
    console.log('selected: ' + event.node.label);
    console.log('treenodes selected: ', this.selectedFiles);
  }

  nodeUnselect(event: any) {
    console.log('unselected: ' + event.node.label);
    console.log('treenodes: ', this.selectedFiles);
  }

  expandToggle(expand: boolean) {
    // If expand is true, expand all, if false, collapse all
    this.treeNodes.forEach(treeNode => {
      this.expandRecursive(treeNode, expand);
    });
  }

  expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
