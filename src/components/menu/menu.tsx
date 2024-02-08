import {CalendarOutlined, HeartFilled, IdcardOutlined, TrophyFilled} from "@ant-design/icons";
import {Menu} from "antd";
import s from "./menu.module.css"
import sprite from "@utils/sprite.svg"

type Props = {
    isCollapsed: boolean
}
export const NavMenu = ({isCollapsed}: Props) => {
    return (
        <>
            {isCollapsed ?
                <div className={`${s.logoContainer} ${s.minLogo}`}>
                    <svg className={s.collapsedLogo}>
                        <use xlinkHref={`${sprite}#collapsedlogo`}/>
                    </svg>
                </div>
                :
                <div className={`${s.logoContainer} ${s.fullLogo}`}>
                    <svg className={s.logo}>
                        <use xlinkHref={`${sprite}#logo`}/>
                    </svg>
                </div>
            }

            <Menu
                className={s.menu}

                mode={"vertical"}
                items={[
                    {
                        key: '1',
                        icon: <CalendarOutlined style={{color: "#120338"}}/>,
                        label: "Календарь",
                    },
                    {
                        key: '2',
                        icon: <HeartFilled style={{color: "#120338"}}/>,
                        label: "Тренировки",
                    },
                    {
                        key: '3',
                        icon: <TrophyFilled style={{color: "#120338"}}/>,
                        label: "Достижения",
                    },
                    {
                        key: '4',
                        icon: <IdcardOutlined style={{color: "#120338"}}/>,
                        label: "Профиль",
                    }
                ]}
            >

            </Menu>

        </>
    );
};