import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'
import JsonData from '../assets/data/LatestListing_Data.json'

function LatestLisiting() {
    const [listDatas, setListDatas] = useState(JsonData.slice(0, 500));
    const [pageNumber, setPageNumber] = useState(0);

    const dataPerPage = 6;
    const currentPage = pageNumber * dataPerPage;

    const displayData = listDatas.slice(currentPage, currentPage + dataPerPage).map((listData) => {
        return (
            <>
                <div className='homeContainer4SubDiv animateBlock'>
                    <div className='homeContainer4SubDiv1'>
                        <img className='SubImg1_1Container4' src={listData.imgURL} alt={listData.prjName}></img>
                    </div>
                    <div className='homeContainer4SubDiv2'>
                        <p className='MFont'>{listData.prjName}</p>
                        <p className='SFont'>{listData.amt}</p>
                    </div>
                    <div className='homeContainer4SubDiv3'>
                        <p className='lorem-ipsum'>
                            {listData.desc}
                        </p>
                    </div>
                    <hr className='listingline' />
                    <div className='homeContainer4SubDiv4'>
                        <p className='builderOwnerName'>{listData.ownerName}</p>
                        <div>
                            <div className='heart-broken'>
                                <div className='vector' />
                            </div>
                            <div className='share-outline' />
                        </div>
                    </div>
                </div>
            </>
        );
    })

    const pageCount = Math.ceil(listDatas.length / dataPerPage);
    const changeListingPage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {displayData}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changeListingPage}
                containerClassName={"paginationListingBttns"}
                previousLinkClassName={"previousListingBttn"}
                nextLinkClassName={"nextListingBttn"}
                disabledClassName={"paginationListingDisabled"}
                activeClassName={"paginationListingActive"}
            />
        </div>
    );

}

export default LatestLisiting;


