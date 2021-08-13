import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, TreeDragDropService, TreeNode } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FileService } from './file.service';
import { MyTreeNode } from './files.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TreeDragDropService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tree-app';
  myNodes: MyTreeNode[];
  treeNodes: TreeNode[];
  selectedFiles: TreeNode[];
  sub: Subscription;
  menuItems: MenuItem[] = [
    {label: 'Download', icon: 'pi pi-download', command: (event) => this.stubMethod('download', this.selectedFiles)},
    {label: 'Archive', icon: 'pi pi-briefcase', command: (event) => this.stubMethod('archive', this.selectedFiles)},
    {label: 'Delete', icon: 'pi pi-send', command: (event) => this.stubMethod('delete', this.selectedFiles)},
    {label: 'Edit', icon: 'pi pi-pencil', command: (event) => this.stubMethod('edit', this.selectedFiles)}
  ];

  constructor(private fileService: FileService) { }

  ngOnInit() {
    this.sub = this.fileService.getFiles()
      .subscribe((files) => {
        const rootNode = this.fileService.convertFilestoNodes(files);
        this.myNodes = [rootNode];
        console.log(this.myNodes);
        this.treeNodes = this.fileService.convertMyNodes(this.myNodes);
      });
  }

  stubMethod(action: string, selectedFiles: TreeNode[]) {
    console.log('these were selected for ' + action);
    selectedFiles.forEach(x => {
      console.log(x.label);
    })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
