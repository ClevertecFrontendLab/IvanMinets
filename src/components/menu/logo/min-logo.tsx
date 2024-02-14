import sprite from '@utils/sprite.svg';

export const MinLogo = () =>
    (
        <div className={'logoContainer minLogo'}>
            <svg className={'collapsedLogo'}>
                <use xlinkHref={`${sprite}#collapsedlogo`}/>
            </svg>
        </div>
    );
