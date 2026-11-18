import React, { useRef, useState } from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Ribbon,
  type ProtectionType
} from '@syncfusion/ej2-react-documenteditor';
import './App.css';
import documentProtectionData from './assets/data-document-protection.json';

DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

interface UserPermission {
  name: string;
  email: string;
  role: string;
  protectionType: ProtectionType;
  description: string;
}

const users: UserPermission[] = [
  {
    name: 'Nancy',
    email: 'nancy@example.com',
    role: 'Price Editor',
    protectionType: 'ReadOnly',
    description: 'Can edit only the price values (editable ranges marked in the document)'
  },
  {
    name: 'Andrew',
    email: 'andrew@example.com',
    role: 'Reviewer',
    protectionType: 'RevisionsOnly',
    description: 'All edits are tracked as revisions; cannot accept or reject revisions'
  },
  {
    name: 'Steven',
    email: 'steven@example.com',
    role: 'Commenter',
    protectionType: 'CommentsOnly',
    description: 'Can insert comments only; cannot edit document content'
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    role: 'Editor',
    protectionType: 'NoProtection',
    description: 'Full editing access on the entire document'
  },
  {
    name: 'Laura',
    email: 'laura@example.com',
    role: 'Viewer',
    protectionType: 'ReadOnly',
    description: 'Read-only access to the document'
  }
];

function App() {
  const containerRef = useRef<DocumentEditorContainerComponent>(null);
  const [currentUser, setCurrentUser] = useState<UserPermission>(users[0]);
  const currentUserRef = useRef<UserPermission>(users[0]);

  const applyUserPermissions = (user: UserPermission) => {
    const container = containerRef.current;
    if (!container || !container.documentEditor) {
      return;
    }
    const documentEditor = container.documentEditor;

    if (documentEditor.documentHelper.isDocumentProtected) {
      documentEditor.editorModule.unProtectDocument();
    }

    documentEditor.isReadOnly = false;
    documentEditor.currentUser = user.email;

    if (user.protectionType !== 'NoProtection') {
      documentEditor.editorModule.enforceProtection('', user.protectionType);
    }

    if (user.email === 'laura@example.com') {
      documentEditor.isReadOnly = true;
    }

    documentEditor.documentHelper.restrictEditingPane.showHideRestrictPane(false);
  };

  const onCreated = () => {
    const container = containerRef.current;
    if (!container || !container.documentEditor) {
      return;
    }
    const documentEditor = container.documentEditor;
    documentEditor.open(JSON.stringify(documentProtectionData));
    applyUserPermissions(currentUserRef.current);

    documentEditor.beforeAcceptRejectChanges = (args: any) => {
      if (currentUserRef.current.email === 'andrew@example.com') {
        args.cancel = true;
      }
    };
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = users.find((u) => u.email === event.target.value);
    if (selected) {
      currentUserRef.current = selected;
      setCurrentUser(selected);
      applyUserPermissions(selected);
    }
  };

  return (
    <div>
      <div className="sample-header">
        <h1>User based restrict editing and approval workflow in React DOCX Editor</h1>
        <p>
          Select a user to switch between role-based editing restrictions: price-only editing with editable
          ranges, tracked changes review, comments-only review, full editing and read-only access.
        </p>
      </div>
      <div className="sample-toolbar">
        <div className="permission-holder">
          <table className="permission-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Email</th>
                <th>Permissions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td>{user.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sample-toolbar">
        <label htmlFor="userSelect">Signed in user:</label>
        <select
          id="userSelect"
          value={currentUser.email}
          onChange={handleUserChange}
          title="Choose the user whose permissions are applied"
        >
          {users.map((user) => (
            <option key={user.email} value={user.email}>
              {user.name}
            </option>
          ))}
        </select>
        <span id="permissionBanner" className="permission-banner">
          Signed in as {currentUser.name} ({currentUser.email}) - {currentUser.role}
        </span>
      </div>
      <div className="sample-content">
        <div className="editor-holder">
          <DocumentEditorContainerComponent
            id="container"
            ref={containerRef}
            height="590px"
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
            enableToolbar={true}
            toolbarMode="Ribbon"
            created={onCreated}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
