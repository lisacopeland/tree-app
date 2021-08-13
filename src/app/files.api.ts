export class MyTreeNode {
  label: string;
  path: string;
  data: File | null;
  leaf: boolean;
  children: MyTreeNode[];

  constructor(label: string, path: string, file: File | null, leaf: boolean = false) {
    this.label = label;
    this.path = path;
    this.data = file;
    this.leaf = leaf;
    this.children = [];
  }

  getOrCreateBranch(branchName: string, path: string): MyTreeNode {
    // This is for creating the branches of the tree
    const child = this.children.find(x => x.label === branchName);
    if (child !== undefined) {
      return child;
    } else {
      const newNode = new MyTreeNode(branchName, path, null, false)
      this.children.push(newNode);
      return newNode;
    }
  }

  addChild(file: File, path: string): MyTreeNode {
    // get the child node in my children array and return it
    // if it doesn't exist, create it and return it
    const child = this.children.find(x => x.label === file.name);
    if (child !== undefined) {
      // This should be an error condition, filenames are unique
      return child;
    } else {
      const newNode = new MyTreeNode(file.name, path, file, true)
      this.children.push(newNode);
      return newNode;
    }
  }

}

export class File {
  id: number;
  account_id: string;
  election_id: number;
  name: string;
  label: string;
  context: string;
  is_public: boolean;
  extension: string;
  meta: unknown;

  created_at: string;
  admin_status: string;
  ver: number;
  updated_at: string;
  folder: string;   // My Path
  signedURL: string;
  url: string;
  // Internal
  downloadURL: string;
  uploadURL: string;
  displayTitle: string;

  constructor(defaultValues: string | Partial<File> = '') {
    if (typeof defaultValues === 'string') {
      this.name = defaultValues;
    } else {
      Object.keys(defaultValues).forEach((key) => {
        // @ts-ignore
        this[key] = defaultValues[key];
      });
    }

    if (this.is_public && this.signedURL) {
      const [, path] = this.signedURL.split('.com/');
      const key = path.split('?')[0];
      this.downloadURL = `https://public.omniballot.us/${key}?v=${this.ver}`;
    }

    this.displayTitle = this.name;
  }

}
