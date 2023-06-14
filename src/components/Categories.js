import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryMovies from "./CategoryMovies";
import request from "../request";

export default function  Categories() {
    return(
        <div className="Categories container">
            <div className="CategoriesContainer">
                <Tabs className="row">


                    {/*    <ul>*/}
                    <div className="categoriesList col-md-2">
                            <TabList>
                                <Tab>Action</Tab>
                                <Tab>Horror</Tab>
                                <Tab>Comedy</Tab>
                                <Tab>Documentary</Tab>
                                <Tab>Romance</Tab>
                            </TabList>
                    {/*    </ul>*/}
                    </div>
                    <div className="categoriesResults col-md-10">
                        <TabPanel>
                            <div className="categoriesResultsContainer">
                                <CategoryMovies title="Action" fetchUrl={request.fetchActionMovies} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="categoriesResultsContainer">
                                <CategoryMovies title="Horror" fetchUrl={request.fetchHorrorMovies} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="categoriesResultsContainer">
                                <CategoryMovies title="Comedy" fetchUrl={request.fetchComedyMovies} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="categoriesResultsContainer">
                                <CategoryMovies title="Documentaries" fetchUrl={request.fetchDocumentaries} />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="categoriesResultsContainer">
                                <CategoryMovies title="Romance" fetchUrl={request.fetchRomanceMovies} />
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

