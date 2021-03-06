import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeDragDropService, TreeNode } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FileService } from './file.service';
import { MyTreeNode, File } from './files.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TreeDragDropService, MessageService],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  files: File[] = [];
  treeNodes: TreeNode[];
  parentBranch: MyTreeNode;
  selectedFiles: TreeNode[];
  foldername = '';
  sub: Subscription;
  addFolderDialogVisible = false;
  status = '';
  context = '';
  menuItems: MenuItem[] = [
    {
      label: 'Add Folder',
      icon: 'pi pi-folder',
      command: (event) => this.stubMethod('addFolder'),
    },
    {
      label: 'Upload File',
      icon: 'pi pi-folder-open',
      command: (event) => this.stubMethod('uploadFile'),
    },
    {
      label: 'Download',
      icon: 'pi pi-download',
      command: (event) => this.stubMethod('download'),
    },
    {
      label: 'Archive',
      icon: 'pi pi-briefcase',
      command: (event) => this.stubMethod('archive'),
    },
    {
      label: 'Delete',
      icon: 'pi pi-send',
      command: (event) => this.stubMethod('delete'),
    },
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      command: (event) => this.stubMethod('edit'),
    },
  ];

  constructor(private fileService: FileService,
              private messageService: MessageService) {}

  ngOnInit() {
    this.sub = this.fileService.getFiles().subscribe((files) => {
      this.files = files;
      this.createTree();
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const inputField = document.querySelector('.p-inputtext');
      if (inputField) {
        inputField.setAttribute('placeholder', 'Filename');
      }
    });
  }

  stubMethod(action: string) {
    let files = this.selectedFiles.filter(x => x.leaf);
    switch(action) {
      case 'addFolder':
        // Check that there is only one selection and it is a branch
        if ((this.selectedFiles.length > 1) || (this.selectedFiles[0].leaf)) {
          this.messageService.add({severity:'warn', summary: 'Info', detail: 'Select only one branch to add a folder.'});
        } else {
          this.parentBranch = this.selectedFiles[0] as MyTreeNode;
          this.addFolderDialogVisible = true;
        }
        break;
      case 'uploadFile':
        // Check that there is only one selection and it is a branch
        if ((this.selectedFiles.length > 1) || (this.selectedFiles[0].leaf)) {
          this.messageService.add({ severity: 'warn', summary: 'Info', detail: 'Select a folder to add files to.' });
        } else {
          this.parentBranch = this.selectedFiles[0] as MyTreeNode;
          // Now display filepicker and then upload file
        }
        break;
      case 'download':
        // Get all of the files and download them, switch their status to downloaded
        if (files.length < 1) {
          this.messageService.add({severity:'warn', summary: 'Info', detail: 'Select at least one file to download.'});
        } else {
          files.forEach(node => {
            if (node.leaf) {
              console.log('downloading ' + node.label);
            }
          });
        }
        break;
      case 'archive':
        // Get all of the files, switch their status to archived
        if (files.length < 1) {
          this.messageService.add({severity:'warn', summary: 'Info', detail: 'Select at least one file to archive.'});
        } else {
          files.forEach(node => {
            if (node.leaf) {
              console.log('Archiving ' + node.label);
            }
          });
        }
        break;
      case 'delete':
        // Walk thru selectedFiles and delete everything
        this.selectedFiles.forEach(node => {
          const myParent = node.parent as MyTreeNode;
          const mySelf = node as MyTreeNode;
          myParent.removeChild(mySelf);
        })
        break;
      case 'edit':
        // Check that there is only one selection and it is a leaf
        if (files.length !== 1) {
          this.messageService.add({severity:'warn', summary: 'Info', detail: 'Select one file at a time to edit.'});
        } else {
          const file = this.fileService.getFileFromNode(files[0] as MyTreeNode, this.files);
          // Now edit the file
        }
        break;
    }
    this.clearSelections();
  }

  clearSelections() {
    this.selectedFiles = [];
  }

  addFolder() {
    this.addFolderDialogVisible = false;
    this.parentBranch.getOrCreateBranch(this.foldername, this.parentBranch.path);
  }

  addFolderHide() {
    this.foldername = '';
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

  nodeDrop(event: any) {
    if (!event.dropNode.leaf) {
      event.accept();
      this.updateAllPaths();
    } else {
      this.messageService.add({severity:'warn', summary: 'Info', detail: 'Select a folder to drop your selection in.'});
    }
  }

  updateAllPaths() {
    // After a node is dropped, update the paths of the files
    // walk thru the tree and update data.folder for each item
    // At the same time, update the "path"
    this.treeNodes.forEach((node) => {
      const myTreeNode = node as MyTreeNode;
      const currentPath = myTreeNode.label + '/';
       if (myTreeNode.children) {
        myTreeNode.children.forEach((childNode) => {
          this.updatePath(childNode, currentPath);
        });
      }
    });
  }

  updatePath(node: MyTreeNode, currentPath: string) {
    if (node.leaf) {
      node.path = currentPath;
      if (node.data) {
        // Todo: you also have to update the actual data
        node.data.folder = currentPath;
        const file = this.fileService.getFileFromNode(node, this.files)
        if (file) {
          file.folder = currentPath;
          // now save it
        }
      }
    } else {
      if (node.children) {
        node.children.forEach(child => {
          this.updatePath(child, currentPath + node.label + '/')
        })
      }
    }
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
