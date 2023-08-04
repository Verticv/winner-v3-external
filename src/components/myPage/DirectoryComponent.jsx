import React from 'react'
import { useHistory } from 'react-router-dom';
import HomeIcon from '../../images/myPage/home_icon.png'
import RightArrow from '../../images/myPage/right_arrow.png'

const DirectoryComponent = ({
    branch1 = "마이페이지",
    branch2 = null, 
    branch3 = null,
    branch4 = null,
    setSelectedTab = null,
    setSelectedSubTab = null,
    mainPath = ""
}) => {

    const history = useHistory();

    function branch1Clicked(branch1) {
        if (branch1 === "마이페이지" ) {
            history.push("/mypage/bet-history")
            setSelectedTab("/mypage/bet-history")
        } else if (branch1 === "출석부") {
            history.push("/attendance")
            setSelectedTab("/attendance")
        } else if (branch1 === "충전/환전") {
            history.push("/money/charge")
            setSelectedTab("/money/charge")
        } else if (branch1 === "고객센터") {
            history.push("/cscenter/contact/all")
            setSelectedTab("/cscenter/contact/all")
        } else if (branch1 === "경기결과") {
            history.push("/gameresults/sports/win-draw-lose")
            setSelectedTab("/gameresults/sports/win-draw-lose")
            if (setSelectedSubTab !== null) {
                setSelectedSubTab("/gameresults/sports/win-draw-lose")
            }
        } else if (branch1 === "게시판") {
            history.push("/freeboard")
        } else if (branch1 ==="e-스포츠") {
            history.push("/esports/structure")
            setSelectedTab("/esports/structure")
        }
    }

    function branch2Clicked(branch2) {
        if (setSelectedSubTab !== null) {
            setSelectedSubTab(branch2)
        }
        if (setSelectedTab !== null) {
            setSelectedTab(branch2)
        }
        history.push(branch2)
    }

    return (
        <div className="flex items-center h-20px w-default mt-20px mb-11px space-x-10px">
            <img className="object-none cursor-pointer" src={HomeIcon} alt="" onClick={() => history.push("/")} />
            <img className="object-none cursor-none mb-px" src={RightArrow} alt=""/>
            <span 
                className={`${
                    !branch2 
                        ? "font-bold" 
                        : "opacity-60"
                    } text-13px text-eeeeee tracking-Stightest cursor-pointer`}
                style={{ marginLeft: '9px'}}
                onClick={() => {branch1Clicked(branch1)}}
            >
                {branch1}
            </span>
            {branch2 && (
                <>
                    <img className="object-none mb-px" style={{marginLeft:'11px'}} src={RightArrow} alt="" />
                    <span
                        className={`${
                            !branch3 
                            ? "font-bold" 
                            : "opacity-60"
                            } text-13px  text-eeeeee tracking-Stightest cursor-pointer`}
                        
                        onClick={() => branch2Clicked(mainPath)}
                        >
                            {branch2}
                        </span>
                </>
            )}
            {branch3 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span className="font-bold text-13px  text-eeeeee tracking-Stightest  cursor-pointer">{branch3}</span>
                </>
            )}
            {branch4 && (
                <>
                    <img className="object-none" src={RightArrow} alt="" />
                    <span className="font-bold text-13px text-gray-r393e41 tracking-Stightest ">{branch4}</span>
                </>
            )}    
        </div>
    )
}

export default DirectoryComponent
