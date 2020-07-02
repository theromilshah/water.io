## Table of Content
- [Table of Content](#table-of-content)
- [Time Series Prediction](#time-series-prediction)
- [Model Evaluation](#model-evaluation)

## Time Series Prediction

- The data for griund water level was fetched from [data.gov](https://data.gov.in/), specifically for Rajasthan state.
- Given the nature of problem statement, Time Series Analysis and Forecasting techniques were used to make predictions.
- Since the data was non-stationarity, stationarity was acheived with log transformation and differentiation, and confirmed with Dickey-Fuller test.
- Predictions were made using ARIMA(5,1,2) model, with an average standard error of 0.32.
- Forecasts were made for next 5 years using the same model.


## Model Evaluation

- Average Standard Error: 0.32
- P-values: Quiet high, which indicated model can be improved.