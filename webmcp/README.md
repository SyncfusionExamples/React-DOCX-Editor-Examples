# WebMCP Integration with Syncfusion React DOCX Editor

## Introduction

This sample demonstrates how to integrate **WebMCP (Web Model Context Protocol)** with the Syncfusion<sup style="font-size:70%">&reg;</sup> [React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) (Document Editor).

The sample enables WebMCP support in the `DocumentEditorContainerComponent`, retrieves the tools exposed by the document editor, and handles tool execution events. Operations that modify the document are configured to display a confirmation dialog before execution.

## Features

- Integrates WebMCP with the Syncfusion React DOCX Editor.
- Enables WebMCP tools using `enableWebMcp`.
- Retrieves the WebMCP tools available from the document editor.

## WebMCP Tool Handling

The sample enables WebMCP using:

```jsx
enableWebMcp={true}
```

After the Document Editor is created, the available WebMCP tools are retrieved using:

```javascript
container.getWebMcpTools();
```

The sample also handles the `beforeWebMcpToolExecute` event to identify document-modifying operations.

The following operations require user confirmation before execution:

- `saveDocument`
- `configureDocumentEditorSettings`
- `replaceAll`
- `insertText`
- `paste`
- `insertBookmark`
- `enforceProtection`
- `stopProtection`
- `insertField`
- `insertEditingRegion`
- `formatCharacter`
- `formatParagraph`
- `insertImage`
- `insertHyperlink`

This provides an additional confirmation step before WebMCP tools perform potentially destructive or modifying operations on the document.

## How to Run the Sample

### Prerequisites

Make sure the following are installed:

- Node.js
- npm

### 1. Clone or download the sample

Download or clone this repository and navigate to the project directory:

```bash
cd WebMCP-React-DOCX-Editor
```

### 2. Install dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Start the application

Run the React development server:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

### 4. Open the sample

Open the application in a supported modern browser.

Open the browser developer console to view the WebMCP tools registered by the Document Editor.

## Common Use Cases

### Multi-Step Document Workflows

Combine multiple WebMCP tools to automate complex document operations in sequence based on user intent.

**Example:**  
> "Find all occurrences of `Demo`, highlight each occurrence in yellow, insert a bookmark for each occurrence, and save the document as a DOCX file."

### Document Navigation and Selection

Navigate through pages and bookmarks, or select words, paragraphs, ranges, and the entire document for subsequent operations.

**Example:**  
> "Go to page 5, select the first paragraph, and make the text bold."

### Document Search and Content Updates

Quickly locate specific words and perform document-wide updates using search and replace operations.

**Example:**  
> "Find all occurrences of `customer` and replace them with `client` throughout the document."

## Resources

- **Product page:**   [Syncfusion® React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) 

- **Documentation:**   [Syncfusion® React DOCX Editor - Documentation](https://help.syncfusion.com/document-processing/word/word-processor/react/overview?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) 

- **Online demo:**   [Syncfusion® React DOCX Editor - Online demo](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/default?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) 

## Support and feedback 

For any other queries, reach our [Syncfusion® support team](https://support.syncfusion.com/?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) or post the queries through the [community forums](https://www.syncfusion.com/forums?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). 

Request new feature through [Syncfusion® feedback portal](https://www.syncfusion.com/feedback?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). 

## License

This is a commercial product and requires a paid license for possession or use Syncfusion's licensed software, including this component, is subject to the terms and conditions of [Syncfusion's EULA](https://www.syncfusion.com/license/studio/syncfusion_essential_studio_eula.pdf?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). You can purchase a licnense [here](https://www.syncfusion.com/sales/products?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples) or start a free 30\-day trial [here](https://www.syncfusion.com/account/manage-trials/start-trials?utm_source=github&utm_medium=listing&utm_campaign=github-github-documenteditor-examples). 