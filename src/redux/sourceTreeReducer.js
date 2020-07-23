const SET_SELECTED_DATA_ID = "SET_SELECTED_DATA_ID";


export const setSelectedDataId = (dataId) => ({ type: SET_SELECTED_DATA_ID, dataId });

let initialState = {
  sourceTreeData: {
    dialogsData: {
      id: "root",
      name: "Переписка",
      children: [
        {
          id: "1",
          type: "folder",
          name: "Партнеры",
          children: [
            {
              id: "1_1",
              type: "document",
              name: "Письмо 1",
            },
            {
              id: "1_2",
              type: "document",
              name: "Письмо 2",
            },
            {
              id: "1_3",
              type: "document",
              name: "Письмо 3",
            },
          ],
        },
        {
          id: "2",
          type: "folder",
          name: "ФНС",
          children: [
            {
              id: "2_1",
              type: "document",
              name: "Извещение 1",
            },
            {
              id: "2_2",
              type: "document",
              name: "Извещение 2",
            },
            {
              id: "2_3",
              type: "document",
              name: "Извещение 3",
            },
          ],
        },
      ],
    },
    documentsData: {
      id: "root",
      type: "folder",
      name: "Документы",
      children: [
        {
          id: "3",
          type: "folder",
          name: "Договора",
          children: [
            {
              id: "3_1",
              type: "document",
              name: "Договор 1",
            },
            {
              id: "3_2",
              type: "document",
              name: "Договор 2",
            },
            {
              id: "3_3",
              type: "document",
              name: "Договор 3",
            },
          ],
        },
        {
          id: "4",
          type: "folder",
          name: "Декларации",
          children: [
            {
              id: "4_1",
              type: "document",
              name: "Декларация 1",
            },
            {
              id: "4_2",
              type: "document",
              name: "Декларация 2",
            },
            {
              id: "4_3",
              type: "document",
              name: "Декларация 3",
            },
          ],
        },
      ],
    },
  },
  selectedDataId: null,
};

const sourceTreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATA_ID: {
      return {
        ...state,
        selectedDataId: action.dataId,
      };
    }
    default:
      return state;
  }
};

export default sourceTreeReducer;
