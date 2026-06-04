import * as React from 'react';

import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        if (containerRef.current) {
            // Accessing spell checker
            let spellChecker = (containerRef.current as DocumentEditorContainerComponent).documentEditor.spellChecker;
            // Set language id to map dictionary in server side
            spellChecker.languageID = 1033;
            spellChecker.removeUnderline = false;
            // Allow suggestion for misspelled word
            spellChecker.allowSpellCheckAndSuggestion = true;
        }
    }, []);

    return (
        <DocumentEditorContainerComponent
            id="container"
            height="590px"
            ref={containerRef}
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
            enableToolbar={true}
            enableSpellCheck={true}
        />
    );
}
export default App;
