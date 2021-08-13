import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { TreeNode } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { File, MyTreeNode } from './files.api';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  files: File[] = [
    {
      ver: 3,
      id: 1,
      updated_at: "2021-08-12T16:53:40.936Z",
      created_at: "2021-08-12T16:52:52.682Z",
      account_id: "dev",
      meta: {},
      admin_status: "downloaded",
      name: "changename.pdf",
      label: "",
      election_id: 7,
      context: "data",
      extension: "pdf",
      is_public: false,
      folder: "account/level1",
      downloadURL: "",
      uploadURL: "",
      displayTitle: "",
      signedURL: "https://dev-static-dataincomingdatabucketa2223a3c-1tq0m9tvvbucp.s3.amazonaws.com/dev/7/1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAVP3UA4QDSX7K2AYH%2F20210813%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20210813T040733Z\u0026X-Amz-Expires=3600\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICny4J%2B9VIR9p8fUS9AKm4T6FgVEhpaf77Tv74Zu3NziAiBQvb9z%2BYuCZAZz5AagWtB3sOlMCZRwMZ3xNCc6eohyHCrWBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDM3NzY2MzU3OTE0MyIM7gF5bvSzhK8Qz4C6KqoEt3t6xW4qS8rNQEsOgLLX0tkRsANaUcufaDETXq1ExkvqWlwcWDJjjSl%2FehmPLqebK9BQ4FanU%2FbiR90h%2BSxNmRPAu9WAyHsoFR%2B70THAVFIS2SGFZMY30HDZyl6paCKmOejbj0F%2BK7r6AqR6mhE59DHDqASaTt3sYchFpFg5wswP0SXli%2BODnJF9ki3%2Fd0TfhBKaiC7PwAoumS%2FB%2FyRt2A%2Bq4kzzf5mNZisLosQ5FLnwNTwja0Wrc4vjFFnr5x9nSDthlCHd0pP5WUuYQKy4FrwKZcBlgI0orYo6YLmkVofKcna0%2FBQXtAzw%2BlUb0WV3ocFjO17VypxyIzFab9hrR3S%2FwrIG0%2BEAXW65kLNZjpaUgI6vrs85XlcDaY8HO%2F5ZuXDaW9E9iq9GCUskFzT24eWXvgTfsY45lqfNXGigm1Q8LyN68H%2BVT%2FHDLUdJDzgAPehPdYWNgXBHCMWzpkV351p%2BVFt8VYp0RaWRPeP83oo%2FgtXVlb5QAn1GL03EeuQmLLeQ4gUfgcGLFIUFBP0Uw6GnM%2FcRzfP6C%2FVCjIUuEt0IzDKuCzx0bfgk%2FzsPz%2FLy4harze2TbjTFY6xy7WHIdS%2F%2BPNgRRsd56PRIWvAMo3qvA3uZHGtaV6lYreHkUf%2Bp9%2BTKy3eu%2B4TTWxZgx9SWACdhWbaaUBor4V7988jT7aCktSwDvHs8%2FKfLxg4d8MAa1MKuLrPwLUlr5DwWhKdseDZAz3Osn6V6s4UwhtvXiAY6qAHtPYPGriCEJGJxiF%2FUsp4USt%2BBokyfv9oOzP1V9OmA7RTMy5gPmWzzUInp1HGzQ204fqAxBsjmz1uT1uZwI5zHIwd%2FfJLIvnZ2wOIrljsSlmMs%2BBcVB2yT21dK8WGikx%2FKwTQNyUBCISD3WCCQoYu9zCl75h9dVErWPHi4qamEMDrZU5YGM4YIOybOaiyIGDxb6w2xM8elfqYNa9Xnm94hpe9ahIX%2FMEc%3D\u0026X-Amz-SignedHeaders=host\u0026response-content-disposition=inline%3Bfilename%3Dchangename.pdf\u0026response-content-type=application%2Fpdf\u0026X-Amz-Signature=dc11b346ab5f3e53e0a24f1b3aec2bf3a97f13b1183226e5721168a24d202733",
      url: ""
    },
    {
      ver: 2,
      id: 2,
      updated_at: "2021-08-12T20:14:47.238Z",
      created_at: "2021-08-12T20:14:47.221Z",
      account_id: "dev",
      meta: {},
      admin_status: "new",
      name: "340207_10151353512927225_2087983896_o.jpg",
      label: "",
      election_id: 0,
      context: "accounts",
      extension: "jpg",
      is_public: false,
      folder: "account/level1",
      downloadURL: "",
      uploadURL: "",
      displayTitle: "",
      signedURL: "https://dev-static-dataincomingdatabucketa2223a3c-1tq0m9tvvbucp.s3.amazonaws.com/dev/0/2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAVP3UA4QDSX7K2AYH%2F20210813%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20210813T040733Z\u0026X-Amz-Expires=3600\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICny4J%2B9VIR9p8fUS9AKm4T6FgVEhpaf77Tv74Zu3NziAiBQvb9z%2BYuCZAZz5AagWtB3sOlMCZRwMZ3xNCc6eohyHCrWBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDM3NzY2MzU3OTE0MyIM7gF5bvSzhK8Qz4C6KqoEt3t6xW4qS8rNQEsOgLLX0tkRsANaUcufaDETXq1ExkvqWlwcWDJjjSl%2FehmPLqebK9BQ4FanU%2FbiR90h%2BSxNmRPAu9WAyHsoFR%2B70THAVFIS2SGFZMY30HDZyl6paCKmOejbj0F%2BK7r6AqR6mhE59DHDqASaTt3sYchFpFg5wswP0SXli%2BODnJF9ki3%2Fd0TfhBKaiC7PwAoumS%2FB%2FyRt2A%2Bq4kzzf5mNZisLosQ5FLnwNTwja0Wrc4vjFFnr5x9nSDthlCHd0pP5WUuYQKy4FrwKZcBlgI0orYo6YLmkVofKcna0%2FBQXtAzw%2BlUb0WV3ocFjO17VypxyIzFab9hrR3S%2FwrIG0%2BEAXW65kLNZjpaUgI6vrs85XlcDaY8HO%2F5ZuXDaW9E9iq9GCUskFzT24eWXvgTfsY45lqfNXGigm1Q8LyN68H%2BVT%2FHDLUdJDzgAPehPdYWNgXBHCMWzpkV351p%2BVFt8VYp0RaWRPeP83oo%2FgtXVlb5QAn1GL03EeuQmLLeQ4gUfgcGLFIUFBP0Uw6GnM%2FcRzfP6C%2FVCjIUuEt0IzDKuCzx0bfgk%2FzsPz%2FLy4harze2TbjTFY6xy7WHIdS%2F%2BPNgRRsd56PRIWvAMo3qvA3uZHGtaV6lYreHkUf%2Bp9%2BTKy3eu%2B4TTWxZgx9SWACdhWbaaUBor4V7988jT7aCktSwDvHs8%2FKfLxg4d8MAa1MKuLrPwLUlr5DwWhKdseDZAz3Osn6V6s4UwhtvXiAY6qAHtPYPGriCEJGJxiF%2FUsp4USt%2BBokyfv9oOzP1V9OmA7RTMy5gPmWzzUInp1HGzQ204fqAxBsjmz1uT1uZwI5zHIwd%2FfJLIvnZ2wOIrljsSlmMs%2BBcVB2yT21dK8WGikx%2FKwTQNyUBCISD3WCCQoYu9zCl75h9dVErWPHi4qamEMDrZU5YGM4YIOybOaiyIGDxb6w2xM8elfqYNa9Xnm94hpe9ahIX%2FMEc%3D\u0026X-Amz-SignedHeaders=host\u0026response-content-disposition=inline%3Bfilename%3D340207_10151353512927225_2087983896_o.jpg\u0026response-content-type=image%2Fjpg\u0026X-Amz-Signature=352738ad79070baaef73aeab5c97557d1ae5f36eab97875c938698eeecb64b61",
      url: ""
    },
    {
      ver: 3,
      id: 1,
      updated_at: "2021-08-12T16:53:40.936Z",
      created_at: "2021-08-12T16:52:52.682Z",
      account_id: "dev",
      meta: {},
      admin_status: "downloaded",
      name: "mydata.xls",
      label: "",
      election_id: 7,
      context: "data",
      extension: "pdf",
      is_public: false,
      folder: "account/level2",
      downloadURL: "",
      uploadURL: "",
      displayTitle: "",
      signedURL: "https://dev-static-dataincomingdatabucketa2223a3c-1tq0m9tvvbucp.s3.amazonaws.com/dev/7/1.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAVP3UA4QDSX7K2AYH%2F20210813%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20210813T040733Z\u0026X-Amz-Expires=3600\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICny4J%2B9VIR9p8fUS9AKm4T6FgVEhpaf77Tv74Zu3NziAiBQvb9z%2BYuCZAZz5AagWtB3sOlMCZRwMZ3xNCc6eohyHCrWBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDM3NzY2MzU3OTE0MyIM7gF5bvSzhK8Qz4C6KqoEt3t6xW4qS8rNQEsOgLLX0tkRsANaUcufaDETXq1ExkvqWlwcWDJjjSl%2FehmPLqebK9BQ4FanU%2FbiR90h%2BSxNmRPAu9WAyHsoFR%2B70THAVFIS2SGFZMY30HDZyl6paCKmOejbj0F%2BK7r6AqR6mhE59DHDqASaTt3sYchFpFg5wswP0SXli%2BODnJF9ki3%2Fd0TfhBKaiC7PwAoumS%2FB%2FyRt2A%2Bq4kzzf5mNZisLosQ5FLnwNTwja0Wrc4vjFFnr5x9nSDthlCHd0pP5WUuYQKy4FrwKZcBlgI0orYo6YLmkVofKcna0%2FBQXtAzw%2BlUb0WV3ocFjO17VypxyIzFab9hrR3S%2FwrIG0%2BEAXW65kLNZjpaUgI6vrs85XlcDaY8HO%2F5ZuXDaW9E9iq9GCUskFzT24eWXvgTfsY45lqfNXGigm1Q8LyN68H%2BVT%2FHDLUdJDzgAPehPdYWNgXBHCMWzpkV351p%2BVFt8VYp0RaWRPeP83oo%2FgtXVlb5QAn1GL03EeuQmLLeQ4gUfgcGLFIUFBP0Uw6GnM%2FcRzfP6C%2FVCjIUuEt0IzDKuCzx0bfgk%2FzsPz%2FLy4harze2TbjTFY6xy7WHIdS%2F%2BPNgRRsd56PRIWvAMo3qvA3uZHGtaV6lYreHkUf%2Bp9%2BTKy3eu%2B4TTWxZgx9SWACdhWbaaUBor4V7988jT7aCktSwDvHs8%2FKfLxg4d8MAa1MKuLrPwLUlr5DwWhKdseDZAz3Osn6V6s4UwhtvXiAY6qAHtPYPGriCEJGJxiF%2FUsp4USt%2BBokyfv9oOzP1V9OmA7RTMy5gPmWzzUInp1HGzQ204fqAxBsjmz1uT1uZwI5zHIwd%2FfJLIvnZ2wOIrljsSlmMs%2BBcVB2yT21dK8WGikx%2FKwTQNyUBCISD3WCCQoYu9zCl75h9dVErWPHi4qamEMDrZU5YGM4YIOybOaiyIGDxb6w2xM8elfqYNa9Xnm94hpe9ahIX%2FMEc%3D\u0026X-Amz-SignedHeaders=host\u0026response-content-disposition=inline%3Bfilename%3Dchangename.pdf\u0026response-content-type=application%2Fpdf\u0026X-Amz-Signature=dc11b346ab5f3e53e0a24f1b3aec2bf3a97f13b1183226e5721168a24d202733",
      url: ""
    },
    {
      ver: 2,
      id: 2,
      updated_at: "2021-08-12T20:14:47.238Z",
      created_at: "2021-08-12T20:14:47.221Z",
      account_id: "dev",
      meta: {},
      admin_status: "new",
      name: "thisherefile.jpg",
      label: "",
      election_id: 0,
      context: "accounts",
      extension: "jpg",
      is_public: false,
      folder: "account/level2/level3",
      downloadURL: "",
      uploadURL: "",
      displayTitle: "",
      signedURL: "https://dev-static-dataincomingdatabucketa2223a3c-1tq0m9tvvbucp.s3.amazonaws.com/dev/0/2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=ASIAVP3UA4QDSX7K2AYH%2F20210813%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20210813T040733Z\u0026X-Amz-Expires=3600\u0026X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCICny4J%2B9VIR9p8fUS9AKm4T6FgVEhpaf77Tv74Zu3NziAiBQvb9z%2BYuCZAZz5AagWtB3sOlMCZRwMZ3xNCc6eohyHCrWBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAIaDDM3NzY2MzU3OTE0MyIM7gF5bvSzhK8Qz4C6KqoEt3t6xW4qS8rNQEsOgLLX0tkRsANaUcufaDETXq1ExkvqWlwcWDJjjSl%2FehmPLqebK9BQ4FanU%2FbiR90h%2BSxNmRPAu9WAyHsoFR%2B70THAVFIS2SGFZMY30HDZyl6paCKmOejbj0F%2BK7r6AqR6mhE59DHDqASaTt3sYchFpFg5wswP0SXli%2BODnJF9ki3%2Fd0TfhBKaiC7PwAoumS%2FB%2FyRt2A%2Bq4kzzf5mNZisLosQ5FLnwNTwja0Wrc4vjFFnr5x9nSDthlCHd0pP5WUuYQKy4FrwKZcBlgI0orYo6YLmkVofKcna0%2FBQXtAzw%2BlUb0WV3ocFjO17VypxyIzFab9hrR3S%2FwrIG0%2BEAXW65kLNZjpaUgI6vrs85XlcDaY8HO%2F5ZuXDaW9E9iq9GCUskFzT24eWXvgTfsY45lqfNXGigm1Q8LyN68H%2BVT%2FHDLUdJDzgAPehPdYWNgXBHCMWzpkV351p%2BVFt8VYp0RaWRPeP83oo%2FgtXVlb5QAn1GL03EeuQmLLeQ4gUfgcGLFIUFBP0Uw6GnM%2FcRzfP6C%2FVCjIUuEt0IzDKuCzx0bfgk%2FzsPz%2FLy4harze2TbjTFY6xy7WHIdS%2F%2BPNgRRsd56PRIWvAMo3qvA3uZHGtaV6lYreHkUf%2Bp9%2BTKy3eu%2B4TTWxZgx9SWACdhWbaaUBor4V7988jT7aCktSwDvHs8%2FKfLxg4d8MAa1MKuLrPwLUlr5DwWhKdseDZAz3Osn6V6s4UwhtvXiAY6qAHtPYPGriCEJGJxiF%2FUsp4USt%2BBokyfv9oOzP1V9OmA7RTMy5gPmWzzUInp1HGzQ204fqAxBsjmz1uT1uZwI5zHIwd%2FfJLIvnZ2wOIrljsSlmMs%2BBcVB2yT21dK8WGikx%2FKwTQNyUBCISD3WCCQoYu9zCl75h9dVErWPHi4qamEMDrZU5YGM4YIOybOaiyIGDxb6w2xM8elfqYNa9Xnm94hpe9ahIX%2FMEc%3D\u0026X-Amz-SignedHeaders=host\u0026response-content-disposition=inline%3Bfilename%3D340207_10151353512927225_2087983896_o.jpg\u0026response-content-type=image%2Fjpg\u0026X-Amz-Signature=352738ad79070baaef73aeab5c97557d1ae5f36eab97875c938698eeecb64b61",
      url: ""
    }
  ];

  constructor() { }

  getFiles(): Observable<File[]> {
    // Get my fake data
    return of(this.files);
  }

  convertFilestoNodes(files: File[]): MyTreeNode {
    // toplevel is 'account/'
    // a whole folder will look like 'account/level/sublevel'
    const root = new MyTreeNode('account', '/account', null, false);
    files.forEach(file => {
      const pathSegments: string[] = file.folder.split('/');
      let branch = root;
      let currentPath = 'account';
      pathSegments.forEach(pathSegment => {
        if (pathSegment !== 'account') {
          branch = branch.getOrCreateBranch(pathSegment, currentPath);
          currentPath = currentPath + '/'+ branch.label;
        }
      });
      // now the branch is where you want to add this file to
      branch.addChild(file, currentPath);
    });
    return root;
  }

  convertMyNodes(myNodes: MyTreeNode[]): TreeNode[] {
    const retNodes: TreeNode[] = [];
    myNodes.forEach(myNode => {
      retNodes.push({
        label: myNode.label,
        data: this.convertData(myNode.data),
        type: (myNode.leaf) ? "file" : "",
        children: this.convertMyNodes(myNode.children)
      })
    })
    return retNodes;
  }

  convertData(file:File | null) {
    if (file !== null) {
      return {
        id: file.id,
        name: file.name,
        progress: 0,
        status: file.admin_status,
        label: file.label,
        context: file.context,
        date: moment(file.created_at).format('MM/DD hh:mm a'),
        public: file.is_public,
        file,
      }
    } else {
      return null
    }
  }
}
