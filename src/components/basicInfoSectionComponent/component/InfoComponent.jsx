const InfoComponent = (props) => {

    const { img, title, content } = props

    return (
        <>
            <div className="wrapperCard d-flex">
                <div className="imgWrap me-2">
                    <img src={img} alt="" />
                </div>
                <div className="contentWrap ">
                    <div className="title ">{title}</div>
                    <div className="content ">{content}</div>
                </div>
            </div>
        </>
    )
};

export default InfoComponent;