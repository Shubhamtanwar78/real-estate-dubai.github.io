import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'
import JsonData from '../assets/data/Review_Data.json'

function Review() {
    const [reviewDatas, setReviewDatas] = useState(JsonData.slice(0, 500));
    const [pageNumber, setPageNumber] = useState(0);
    const [imgNum, setImgNum] = useState(0)

    const dataPerPage = 3;
    const currentPage = pageNumber * dataPerPage;

    const displayData = reviewDatas.slice(currentPage, currentPage + dataPerPage).map((reviewData) => {
        const data = reviewData.stars;
        let elements = [];

        for (let i = 0; i < data; i++) {
            elements.push(<img src='./images/extra/filledStar.svg' alt={i + 1} className='star'></img>);
        }
        if (data < 5) {
            const newData = 5 - data;
            // setImgNum(newData);
            let m = data;
            for (let i = 0; i < newData; i++) {
                elements.push(<img src='./images/extra/star.svg' alt={m + 1} className='star'></img>);
                m++;
            }
        }
        return (
            <div key={imgNum} className='homeContainer5SubDiv animateBlock'>
                <div className='homeContainer5SubDiv1'>
                    <img className='SubImg1_1Container5' src={reviewData.imgURL} alt={reviewData.reviewPersonName}></img>
                </div>
                <div className='homeContainer5SubDiv2'>
                    {elements}
                    {/* <p className='reviewtext'></p> */}
                </div>
                <div className='homeContainer5SubDiv3'>
                    <p className='SubDiv3Container5'>
                        {reviewData.desc}
                    </p>
                </div>
                <hr className='reviewline' />
                <div className='homeContainer5SubDiv4'>
                    <p className='reviewtext'><span style={{ fontWeight: 'bold' }}>{reviewData.reviewPersonName}</span> -  {reviewData.personLocation}</p>
                </div>
            </div>
        );
    })

    const pageCount = Math.ceil(reviewDatas.length / dataPerPage);
    const changeReviewPage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {displayData}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changeReviewPage}
                containerClassName={"paginationReviewBttns"}
                previousLinkClassName={"previousReviewBttn"}
                nextLinkClassName={"nextReviewBttn"}
                disabledClassName={"paginationReviewDisabled"}
                activeClassName={"paginationReviewActive"}
            />
        </div>
    );

}

export default Review;


