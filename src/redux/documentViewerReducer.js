const GET_DOCUMENT_BY_ID = "GET_DOCUMENT_BY_ID";
const GET_START_EDIT_DOCUMENT = "GET_START_EDIT_DOCUMENT";
const ON_CHANGE_EDIT_DOCUMENT_TEXT = "ON_CHANGE_EDIT_DOCUMENT_TEXT";
const SAVE_EDIT_DOCUMENT_TEXT = "GET_SAVE_EDIT_DOCUMENT_TEXT";

export const getDocumentById = (documentId) => ({
  type: GET_DOCUMENT_BY_ID,
  documentId,
});
export const getStartEditDocument = (currentOpenDocumentText) => ({
  type: GET_START_EDIT_DOCUMENT,
  currentOpenDocumentText,
});
export const onChangeEditDocumentText = (editedDocumentText) => ({
  type: ON_CHANGE_EDIT_DOCUMENT_TEXT,
  editedDocumentText,
});
export const saveEditDocumentText = (documentId) => ({
  type: SAVE_EDIT_DOCUMENT_TEXT,
  documentId,
});

let initialState = {
  documents: [
    { id: "1_1", name: "Письмо 1", text: "ID[1_1]: Письмо 1" },
    { id: "1_2", name: "Письмо 2", text: "ID[1_2]: Письмо 2" },
    { id: "1_3", name: "Письмо 3", text: "ID[1_3]: Письмо 3" },
    { id: "2_1", name: "Извещение 1", text: "ID[2_1]: Извещение 1" },
    { id: "2_2", name: "Извещение 2", text: "ID[2_2]: Извещение 2" },
    { id: "2_3", name: "Извещение 3", text: "ID[2_3]: Извещение 3" },
    { id: "3_1", name: "Договор 1", text: "ID[3_1]: Договор 1" },
    { id: "3_2", name: "Договор 2", text: "ID[3_2]: Договор 2" },
    { id: "3_3", name: "Договор 3", text: "ID[3_3]: Договор 3" },
    { id: "4_1", name: "Декларация 1", text: "ID[4_1]: Декларация 1" },
    { id: "4_2", name: "Декларация 2", text: "ID[4_2]: Декларация 2" },
    { id: "4_3", name: "Декларация 3", text: "ID[4_3]: Декларация 3" },
  ],
  documentIsOpen: [{ id: null, name: null, text: null }],
  documentIsOpen_textEdit: "",
  documentEditMode: false,
};

const documentViewerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOCUMENT_BY_ID: {
      return {
        ...state,
        documentEditMode: false,
        documentIsOpen: state.documents.filter(
          (document) => document.id === action.documentId
        ),
      };
    }
    case GET_START_EDIT_DOCUMENT: {
      return {
        ...state,
        documentIsOpen_textEdit: action.currentOpenDocumentText,
        documentEditMode: true,
      };
    }
    case ON_CHANGE_EDIT_DOCUMENT_TEXT: {
      return {
        ...state,
        documentIsOpen_textEdit: action.editedDocumentText,
      };
    }
    case SAVE_EDIT_DOCUMENT_TEXT: {
      return {
        ...state,
        documents: [
          ...state.documents,
          (state.documentIsOpen[0].text = state.documentIsOpen_textEdit),
        ],
        documentEditMode: false,
      };
    }
    default:
      return state;
  }
};

export default documentViewerReducer;
