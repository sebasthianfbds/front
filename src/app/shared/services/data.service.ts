import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor() {}

  data = [
    { value: "SAS", label: "SAS" },
    { value: "SQL", label: "SQL" },
    { value: "Ruby", label: "Ruby" },
    { value: "artificial intelligence", label: "artificial intelligence" },
    { value: "backpropagation", label: "backpropagation" },
    { value: "algorithm", label: "algorithm" },
    { value: "binomial distribution", label: "binomial distribution" },
    { value: "chi-square test", label: "chi-square test" },
    { value: "Bayesian network", label: "Bayesian network" },
    { value: "Bayes' Theorem", label: "Bayes' Theorem" },
    { value: "bias", label: "bias" },
    { value: "Big Data", label: "Big Data" },
    { value: "AngularJS", label: "AngularJS" },
    { value: "posterior distribution", label: "posterior distribution" },
    { value: "prior distribution", label: "prior distribution" },
    { value: "R", label: "R" },
    { value: "Root Mean Squared Error", label: "Root Mean Squared Error" },
    { value: "scalar", label: "scalar" },
    { value: "model", label: "model" },
    { value: "MATLAB", label: "MATLAB" },
    { value: "matrix", label: "matrix" },
    { value: "median", label: "median" },
    { value: "moving average", label: "moving average" },
    { value: "normal distribution", label: "normal distribution" },
    { value: "outlier", label: "outlier" },
    { value: "Pandas", label: "Pandas" },
    { value: "objective function", label: "objective function" },
    { value: "data science", label: "data science" },
    { value: "data structure", label: "data structure" },
    { value: "dependent variable", label: "dependent variable" },
    { value: "feature", label: "feature" },
    { value: "data wrangling", label: "data wrangling" },
    { value: "independent variable", label: "independent variable" },
    { value: "linear algebra", label: "linear algebra" },
    { value: "quantile, quartile", label: "quantile, quartile" },
    {
      value: "strata, stratified sampling",
      label: "strata, stratified sampling",
    },
  ];
}
