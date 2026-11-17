import { DocumentEditorContainerComponent, Toolbar, Ribbon } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar, Ribbon);

function App() {
    return (
        <DocumentEditorContainerComponent 
            id="container" 
            height="590px" 
            // Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            enableToolbar={true}
            toolbarMode="Ribbon"
        />
    );
}

export default App;
