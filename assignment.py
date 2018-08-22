import pandas as pd
import numpy as np                               # vectors and matrices
import pandas as pd                              # tables and data manipulations
import matplotlib.pyplot as plt                  # plots
# import seaborn as sns                            # more plots

# from dateutil.relativedelta import relativedelta # working with dates with style
# from scipy.optimize import minimize              # for function minimization

# import statsmodels.formula.api as smf            # statistics and econometrics
# import statsmodels.tsa.api as smt
# import statsmodels.api as sm
# import scipy.stats as scs

# from itertools import product                    # some useful functions
# from tqdm import tqdm_notebook

import warnings                                  # `do not disturbe` mode
warnings.filterwarnings('ignore')




# ads = pd.read_csv('../../data/ads.csv', index_col=['Time'], parse_dates=['Time'])
# currency = pd.read_csv('../../data/currency.csv', index_col=['Time'], parse_dates=['Time'])

def exponential_smoothing(series, alpha):
    """
        series - dataset with timestamps
        alpha - float [0.0, 1.0], smoothing parameter
    """
    result = [series[0]] # first value is same as series
    for n in range(1, len(series)):
        result.append(alpha * series[n] + (1 - alpha) * result[n-1])
    return result
    
def plotExponentialSmoothing(series, alphas):
    """
        Plots exponential smoothing with different alphas
        
        series - dataset with timestamps
        alphas - list of floats, smoothing parameters
        
    """
    with plt.style.context('seaborn-white'):    
        plt.figure(figsize=(15, 7))
        for alpha in alphas:
            plt.plot(exponential_smoothing(series, alpha), label="Alpha {}".format(alpha))
        plt.plot(series.values, "c", label = "Actual")
        plt.legend(loc="best")
        plt.axis('tight')
        plt.title("Exponential Smoothing")
        plt.grid(True)

ts=[50,68,85,111,133,143,161,180,193,185,193,215,228,224,226,249,228,231,214,
   185,204,193,187,167,148,121,95,88,87,119,125,134,131,126,127,138,135,
 129,166,175,166,157,158,187,193,161,169,167,149,138,132,136,98,124,122]



print(exponential_smoothing(ts, 0.5))
# plotExponentialSmoothing(ts, [0.3, 0.05])
# plotExponentialSmoothing(currency.GEMS_GEMS_SPENT, [0.3, 0.05])

# plotExponentialSmoothing(ads.Ads, [0.3, 0.05])
# plotExponentialSmoothing(currency.GEMS_GEMS_SPENT, [0.3, 0.05])