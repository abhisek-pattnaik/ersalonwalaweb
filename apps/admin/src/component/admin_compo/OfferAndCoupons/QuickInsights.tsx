import "./QuickInsights.css";

interface QuickInsightsProps {
    redemptionRate?: number;
    revenue?: string;
}

const QuickInsights = ({
    redemptionRate = 18.4,
    revenue = "$24,500",
}: QuickInsightsProps) => {
    return (
        <div className="quick-insights">

            <h3>Quick Insights</h3>

            <div className="insight-row">
                <span>Redemption Rate</span>
                <span className="rate">{redemptionRate}%</span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${redemptionRate}%` }}
                />
            </div>

            <div className="insight-row revenue">
                <span>Revenue Generated</span>
                <span className="amount">{revenue}</span>
            </div>

        </div>
    );
};

export default QuickInsights;