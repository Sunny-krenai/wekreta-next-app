"use client";
import { Constants } from "@/common/constant/constant";
import { Banner } from "@/models/Banners";
import { Carousel } from "react-responsive-carousel";

const BannerSection = (props: { banners: Banner[] }) => {
    const banners: Banner[] = props.banners;

    return (
        <>
            {/* *ngIf="config.section.name==Constants.BANNER_SECTION && config.section.value > 0" */}
            <div className="mb-3" id={Constants.BANNER_SECTION_DIV_ID}>
                {/* <div className="row"
                        *ngIf="loadingBanner && config.section.name==Constants.BANNER_SECTION && config.section.value > 0">
                        <div className="col-md-12">
                            <div className="banner-lodings-block" style="position: relative;">
                                <div className="banner-lodings">
                                    <ngx-shimmer-loading [width]="'100%'" [height]="'500px'"> </ngx-shimmer-loading>
                                </div>
                            </div>
                        </div>
                    </div> */}

                {/* <!--banner start--> */}
                {/* <div id="carouselExampleControls" className="desktopBanner carousel slide" data-bs-ride="carousel"
                        *ngIf="banners.length>0 && config.section.name==Constants.BANNER_SECTION && config.section.value > 0 && !loadingBanner">
                        <div className="carousel-inner">
                            <div className="carousel-item"
                                [ngClass]="{'active':index==0, 'cursor-pointer':banner.bannerType!= Constants.BANNER_TYP_NONE}"
                                *ngFor="let banner of banners; let index=index" (click)="redirectViaBanner(banner)">
                                <img onerror="this.src='assets/imgs/no-image-available.jpeg';" loading="lazy"
                                    src="{{Constants.EMPTY_STRINGS.includes(banner.bannerMediaUrl)?'assets/imgs/no-image-available.jpeg':banner.bannerMediaUrl}}"
                                    alt="{{banner.name}}" className="d-block">
                            </div>
                        </div>
                        <div className={banners.length ==1?'d-none':''}>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next" #nextSlide>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> */}
                    
                    {banners?.length > 0 && (
                        <Carousel
                            autoPlay={true}
                            // infiniteLoop={true}
                            showArrows={true}
                            transitionTime={1000}
                            showThumbs={false}
                            showStatus={false}
                        >
                            {banners.map((banner, index) => (
                                <div key={index} >
                                    <img key={index}
                                        src={
                                            Constants.EMPTY_STRINGS.includes(banner?.bannerMediaUrl)
                                                ? "/no-image-available.jpeg"
                                                : banner?.bannerMediaUrl
                                        }
                                        alt={banner?.name}
                                    />
                                    {/* <p className="legend">Legend {index}</p> */}
                                </div>
                            ))}
                        </Carousel>
                    )}

                {/* <!--banner end--> */}

                {/* <!-- Mobile Banner --> */}
                {/* <div id="carouselMobileControls" className="mobileBanner carousel slide" data-bs-ride="carousel"
                        *ngIf="banners.length>0 && config.section.name==Constants.BANNER_SECTION && config.section.value > 0&& !loadingBanner">
                        <div className="carousel-inner pointer">
                            <div className="carousel-item" [ngClass]="{'active':index==0}"
                                *ngFor="let banner of banners; let index=index" (click)="redirectViaBanner(banner)">
                                <img onerror="this.src='assets/imgs/no-image-available.jpeg';" loading="lazy"
                                    src="{{!Constants.EMPTY_STRINGS.includes(banner.mobileBannerImageUrl)?banner.mobileBannerImageUrl:Constants.EMPTY_STRINGS.includes(banner.bannerMediaUrl)?'assets/imgs/no-image-available.jpeg':banner.bannerMediaUrl}}"
                                    alt="{{banner.name}}" className="d-block">

                            </div>

                        </div>
                        <div className="" [ngClass]="{'d-none': banners.length ==1}">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselMobileControls"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselMobileControls"
                                data-bs-slide="next" #nextMobileSlide>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div> */}
                {/* <!-- Mobile Banner --> */}
            </div>
        </>
    );
};

export default BannerSection;
