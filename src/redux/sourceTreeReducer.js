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
          id: "1",
          name: "Договора",
          children: [
            {
              id: "1_1",
              name: "Договор 1",
            },
            {
              id: "1_2",
              name: "Договор 2",
            },
            {
              id: "1_3",
              name: "Договор 3",
            },
          ],
        },
        {
          id: "2",
          name: "Декларации",
          children: [
            {
              id: "2_1",
              name: "Декларация 1",
            },
            {
              id: "2_2",
              name: "Декларация 2",
            },
            {
              id: "2_3",
              name: "Декларация 3",
            },
          ],
        },
      ],
    },
  }
};

const sourceTreeReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default sourceTreeReducer;
