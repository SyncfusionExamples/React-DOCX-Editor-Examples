import * as React from 'react';
import { DocumentEditorContainerComponent, SpellChecker, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    const containerRef = React.useRef(null);
    React.useEffect(() => {
        if (containerRef.current) {
            let container: DocumentEditorContainerComponent = containerRef.current as DocumentEditorContainerComponent;
            // Get the SpellChecker instance from DocumentEditorContainer.
            let spellChecker: SpellChecker = container.documentEditor.spellChecker;
            // set the language ID for spell checker. Here, 1033 is the language ID for English (United States).
            spellChecker.languageID = 1033;
            // remove the underline for misspelled words.
            spellChecker.removeUnderline = false;
            // Allow suggestion for misspelled word 
            spellChecker.allowSpellCheckAndSuggestion = true;
        }
    }, []);
    return (
        <DocumentEditorContainerComponent
            height="590px"
            ref={containerRef}
            // Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
            enableToolbar={true}
            enableSpellCheck={true}
        />
    );
}
export default App;