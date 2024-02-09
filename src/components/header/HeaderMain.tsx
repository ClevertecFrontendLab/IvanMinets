import s from './HeaderMain.modlue.css'
export const HeaderMain = () => {
    return (
           <>
            <div>Главная</div>
            <div className={s.headertext}>Приветствуем тебя в CleverFit - приложении, которое поможет тебе добиться своей мечты!</div>
            <button>Настройки</button>
        </>
    );
};
