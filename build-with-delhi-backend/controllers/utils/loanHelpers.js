export const updateLoanValues = (loan) => {
    loan.interestRate = loan.interestRate * (1 + ((Math.random() - 0.5)/1000)) 
    const amountVariation = Math.random() < 0.5 ? -50 : 50;
    loan.minLoanAmount = loan.minLoanAmount + amountVariation
    loan.maxLoanAmount = loan.maxLoanAmount + amountVariation
    loan.processingFee = loan.processingFee + amountVariation
    const rankCalculated = calculateRank(loan)
    loan.rank = rankCalculated
    return loan
}

export const calculateRank = (loan) => {
    const interestRateWeight = 0.4
    const processingFeeWeight = 0.3
    const tenureWeight = 0.2
    const documentsRequiredWeight = 0.1
    
    const documentsRequiredLength = loan.documentsRequired.length
    const rank = (loan.interestRate * interestRateWeight) + 
    (loan.processingFee * processingFeeWeight) + 
    (loan.tenure * tenureWeight) +
    (documentsRequiredLength * documentsRequiredWeight)
    return rank;
}