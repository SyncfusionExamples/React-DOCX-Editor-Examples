import * as React from 'react';
import styles from './App.module.scss';
import { IAppProps } from './IAppProps';

import {
  DocumentEditorContainerComponent,
  Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

export default class App extends React.Component<IAppProps, {}> {

  public render(): React.ReactElement<IAppProps> {
    return (
      <div className={styles.app}>
        <DocumentEditorContainerComponent
          id="container"
          height="600px"
          serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
          enableToolbar={true}
        />
      </div>
    );
  }
}