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
          name: "Партнеры",
          children: [
            {
              id: "1_1",
              name: "Письмо 1",
            },
            {
              id: "1_2",
              name: "Письмо 2",
            },
            {
              id: "1_3",
              name: "Письмо 3",
            },
          ],
        },
        {
          id: "2",
          name: "ФНС",
          children: [
            {
              id: "2_1",
              name: "Извещение 1",
            },
            {
              id: "2_2",
              name: "Извещение 2",
            },
            {
              id: "2_3",
              name: "Извещение 3",
            },
          ],
        },
      ],
    },
    documentsData: {
      id: "root",
      name: "Документы",
      children: [
        {
          id: "3",
          name: "Договора",
          children: [
            {
              id: "3_1",
              name: "Договор 1",
            },
            {
              id: "3_2",
              name: "Договор 2",
            },
            {
              id: "3_3",
              name: "Договор 3",
            },
          ],
        },
        {
          id: "4",
          name: "Декларации",
          children: [
            {
              id: "4_1",
              name: "Декларация 1",
            },
            {
              id: "4_2",
              name: "Декларация 2",
            },
            {
              id: "4_3",
              name: "Декларация 3",
            },
          ],
        },
      ],
    },
  },
  documents: [
    { id: "1_1", text: "ID[1_1]: Письмо 1" },
    { id: "1_2", text: "ID[1_2]: Письмо 2" },
    { id: "1_3", text: "ID[1_3]: Письмо 3" },
    { id: "2_1", text: "ID[2_1]: Извещение 1" },
    { id: "2_2", text: "ID[2_2]: Извещение 2" },
    { id: "2_3", text: "ID[2_3]: Извещение 3" },
    { id: "3_1", text: "ID[3_1]: Договор 1" },
    { id: "3_2", text: "ID[3_2]: Договор 2" },
    { id: "3_3", text: "ID[3_3]: Договор 3" },
    { id: "4_1", text: "ID[4_1]: Декларация 1" },
    { id: "4_2", text: "ID[4_2]: Декларация 2" },
    { id: "4_3", text: "ID[4_3]: Декларация 3" },
  ],
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
