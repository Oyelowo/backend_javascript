def exponential_smoothing(prevWeekSales, prevWeekForcast, alpha):
    """
        sales - dataset with timestamps
        alpha - float [0.0, 1.0], smoothing parameter
    """
    return (alpha * prevWeekSales + (1 - alpha) * prevWeekForcast)
