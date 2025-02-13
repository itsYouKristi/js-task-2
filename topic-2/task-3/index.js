/**
 * Задача 3
 * В этой задаче вам необходимо дописать функцию,
 * которая проверяет группу на корректность
 * Функция принимает на вход строку содержащую символы (), {} или []
 * Должна вернуть True, если строка пустая или группа корректна
 * Или False, если группа неправильная
 * Правильная строка не может закрыть группу в неправильном порядке,
 * открыть группу, но не закрыть ее, или закрыть группу до ее открытия. 
 * 
 * Примеры корректных групп:
 * ([{}]), (), [], {}, {()}
 * Примеры некорректных:
 * )(), {(}), ([], [])
 * 
 * @param {*} group 
 */
function isGroup(group) {
    const arrayGroup =[
        ['(',')'],
        ['{','}'],
        ['[',']']
    ];
    for(let i = 0; i< group.length/2; i++){
        for(let j = 0; j < 3; j++){
            if(group[i] === arrayGroup[j][0] && group[group.length-i-1] !== arrayGroup[j][1]){
                return false;
            }
        }
    }

    return true;
}

module.exports.isGroup = isGroup;