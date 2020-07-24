# Test-project
Полученное тестовое задание:
1) На Севере наименование приложения "Тестовое задание" (слева) и иконка "пользоватеь" (справа), и меню "Действия" с дочерними узлами "Открыть" и "Сохранить". 
2) На Западе дерево каталога.  
3) Старшие узлы: "Документы" и "Переписка".  
  У узла "Документы" есть дочерние узлы "Договора" и "Декларации".  
  У узла "Документы" есть дочерние узлы "Документ 1", "Документ 2", "Документ 3" 
  У узла "Декларации" есть дочерние узлы "Декларация 1", "Декларация 2", "Декларация 3" 
  У узла "Переписка" есть дочерние узлы "Партнеры" и "ФНС".  
  У узла "Партнеры" есть дочерние узлы "Письмо 1", "Письмо 2", "Письмо 3" 
  У узла "ФНС" есть дочерние узлы "Извещение 1", "Извещение 2", "Извещение 3" 
    
4) В Центре должен отображаться текст открытого документа или письма. Если ничего не открыто, то в центре отображается дефолтное сообщение "выберите и откройте документ или письмо". 
5) Блок на Востоке отсутствует. 
6) На Юге строка состояния с именем открытого документа или письма (слева) и текущей датой (справа).   
7) При выборе узла дерева должен открываться дочерний список узлов, при этом другие ветки должны закрываться. 
8) При выборе меню "Открыть" в центральном блоке должен отображаться открытый документ или письмо. 
9) При выборе меню "Сохранить" должен сохраняться открытый документ или письмо.
___________________________________________________________________________________________
Полностью выполненые пункты в соотствии с полученным заданием: 
2,3,4,5,6,9

Пункт-1 Данный пункт выполнен кроме, меню "Действия" (требует доработки)

Пункт-7 Данный пункт выполнен кроме, узлы веток не закрываются при выборе дочерних веток (требует доработки)

Пункт-8 Вместо кнопки "Открыть" была реализована кнопка "Редактировать", при активации позволяет редактировать выбранный документ или письмо

___________________________________________________________________________________________

В данном тестовом задании реализованы следующие дополнительные функции.

1) При выборе документа или письма в дереве каталога, доступен режим просмотра выбранного элемента в центральном блоке
2) В режиме редактирования документа или письма, если пользователь не сохранили текущий документ и выбрал новый элемент в дереве каталога, то в этот момент вызывается оповещение о не сохраненном документе.
___________________________________________________________________________________________

# Документация

DocumentViewerReducer
| Поле      | тип               | Описание |
| ------------- |:------------------:| -----:|
| documents     | array    | Содержит информацию о документах и письмах, каждый элемент массива представляет собой объект имеющий обязательные поля id - уникальный индетификатор документа, name - имя документа, text - текст документа|
| documentIsOpen | array    | Содержит информацию о текущем открытом документе, в массиве находится единственный объект с обязательными поляма id, name, text |
| documentIsOpen_textEdit | string | Содержит текст текущего выбранного документа, данное поле используется в режиме редактирования документа |
| documentEditMode | boolean | true - выбранный документ находится в режиме редактирования, false - выбранный документ находится в режиме просмотра |

SourceTreeReducer
| Поле      | тип               | Описание |
| ------------- |:------------------:| -----:|
| sourceTreeData | object | Структура данного объекта представляет собой дерево каталога |
| selectedDataId | string | При выборе документа в каталоге, данное поле сохраняет id выбранного документа или письма |
