import { useState, useEffect } from "react";
import { List, Spin } from "antd";

interface StampingJob {
    stepNumber: number;
    description: string;
    sessionId: number;
    status: string;
    action: string;
    id: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}

interface StampingJobProps {
    sessionId: number;
}

const StampingJob: React.FC<StampingJobProps> = ({ sessionId }) => {
    const [jobs, setJobs] = useState<StampingJob[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchStampingJobs = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                if (!accessToken) {
                    console.error("No access token found!");
                    setLoading(false);
                    return;
                }

                console.log("Fetching StampingJobs for sessionId:", sessionId);

                const response = await fetch(
                    `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/stamping-jobs?PageIndex=1&PageSize=10`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${accessToken}`
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch Stamping Jobs");
                }

                const data = await response.json();
                console.log("Stamping Jobs Data:", data);

                if (!Array.isArray(data)) {
                    throw new Error("API response is not an array");
                }

                setJobs(data.filter(job => job.sessionId === sessionId));
            } catch (error) {
                console.error("Error fetching stamping jobs:", error);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };

        fetchStampingJobs();
    }, [sessionId]);

    return (
        <div>
            {loading ? <Spin /> : jobs.length > 0 ? (
                <List
                    size="small"
                    bordered
                    dataSource={jobs}
                    renderItem={(job: StampingJob) => (
                        <List.Item>
                            <strong>Bước {job.stepNumber}:</strong> {job.description} |
                            <strong> Trạng thái:</strong> {job.status} |
                            <strong> Hành động:</strong> {job.action}
                        </List.Item>
                    )}
                />
            ) : (
                <p style={{ color: "gray", marginLeft: 10 }}>Không có stampingJobs</p>
            )}
        </div>
    );
};

export default StampingJob;
