import React, { Component } from 'react';
import ResultsAdd from './ResultsAdd';
import instance from "../firebase/instance";
import ResultsList from './ResultsList';
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';

class Results extends Component {
    state = {
        name: "",
        unit: "",
        grade: "",
        results: [],
        modalIsOpen: false,
    };

    componentDidMount() {
        trackPromise(
            instance.get("/results.json").then((response) => {
                console.log(response);
                const fetchedData = [];
                for (let key in response.data) {
                    fetchedData.push({ ...response.data[key], id: key })
                }
                this.setState({
                    results: fetchedData,
                });
            }));
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    handlePost = (e) => {
        e.preventDefault();

        const Data = {
            name: this.state.name,
            unit: this.state.unit,
            grade: this.state.grade,
        };
        trackPromise(
            instance.post("/results.json", Data).then((response) => {
                console.log(response)

                const results = [
                    ...this.state.results,
                    { ...Data, id: response.data.name },
                ];

                this.setState({
                    name: "",
                    unit: "",
                    grade: "",
                    results: results,
                })

                toast.success("You added a new entry...")
            }));
    };

    handleRemove = (id) => {
        instance.delete(`/results/${id}.json`).then((response) => {
            console.log(response)
        });
        this.setState({
            results: this.state.results.filter(result => result.id !== id)
        });
        toast.error("Entry removed successfully...")
    };

    handleModalClose = () => {
        this.setState({
            name: "",
            unit: "",
            grade: "",
            modalIsOpen: false,
        })
    };

    handleModalOpen = (id) => {
        const result = this.state.results.find(result => result.id === id)
        this.setState({
            name: result.name,
            unit: result.unit,
            grade: result.grade,
            modalIsOpen: true,
            id: result.id,
        })
    };

    handleUpdate = (e) => {
        e.preventDefault();

        this.setState({
            modalIsOpen: false,
        });

        const Data = {
            name: this.state.name,
            unit: this.state.unit,
            grade: this.state.grade,
        };
        trackPromise(
            instance.put(`/results/${this.state.id}.json`, Data).then((response) => {
                console.log(response);

                instance.get("/results.json").then((response) => {
                    const fetchedResults = [];

                    for (let key in response.data) {
                        fetchedResults.push({
                            ...response.data[key],
                            id: key,
                        });
                    }

                    this.setState({
                        results: fetchedResults,
                        name: "",
                        unit: "",
                        grade: "",
                    });

                    toast.info("Entry updated successfully...")
                });
            }));

    };






    render() {
        const { name, unit, grade, results, modalIsOpen } = this.state;
        return (
            <div className="container">
                <ResultsAdd
                    name={name}
                    unit={unit}
                    grade={grade}
                    handleChange={this.handleChange}
                    handlePost={this.handlePost}
                />

                <ResultsList
                    name={name}
                    unit={unit}
                    grade={grade}
                    results={results}
                    handleChange={this.handleChange}
                    handleRemove={this.handleRemove}
                    modalIsOpen={modalIsOpen}
                    handleModalOpen={this.handleModalOpen}
                    handleModalClose={this.handleModalClose}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        );
    };
}

export default Results;