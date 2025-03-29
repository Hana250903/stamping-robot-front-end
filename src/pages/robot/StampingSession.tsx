import { useState, useEffect } from "react";
import { List, Collapse } from "antd";

const { Panel } = Collapse;

interface StampingSessionProps {
    robotId: number;
}

interface Session {
    id: number;
    quantity: number;
    status: string;
    robotId: string;
}

const StampingSession: React.FC<StampingSessionProps> = ({ robotId }) => {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        const fetchStampingSessions = async () => {
            try {
                const accessToken = localStorage.getItem("accessToken");
                if (!accessToken) {
                    console.error("No access token found!");
                    setLoading(false);
                    return;
                }

                console.log("Fetching StampingSessions for robotId:", robotId);

                const response = await fetch(
                    `https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/stamping-sessions?PageIndex=1&PageSize=10`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${accessToken}` // 🛑 Thêm token vào headers
                        }
                    }
                );

                if (response.status === 401) {
                    console.error("Unauthorized! Token might be expired.");
                    setLoading(false);
                    return;
                }

                if (!response.ok) {
                    throw new Error(`Failed to fetch Stamping Sessions - Status: ${response.status}`);
                }

                const data = await response.json();
                console.log("Stamping Sessions Data:", data);

                if (!Array.isArray(data)) {
                    throw new Error("API response is not an array");
                }

                if (isMounted) {
                    setSessions(data.filter(session => session.robotId === robotId));
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    console.error("Error fetching stamping sessions:", error);
                    setSessions([]); // Đảm bảo state không bị undefined
                    setLoading(false);
                }
            }
        };

        const timeoutId = setTimeout(fetchStampingSessions, 500);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [robotId]);





    return (
        <Collapse>
            <Panel header="Stamping Sessions" key="1">
                <List
                    loading={loading}
                    dataSource={sessions}
                    renderItem={(session: Session) => (
                        <List.Item>
                            <strong>ID:</strong> {session.id} | <strong>Số lượng:</strong> {session.quantity} | <strong>Trạng thái:</strong> {session.status}
                        </List.Item>
                    )}
                />
            </Panel>
        </Collapse>
    );
};

export default StampingSession;
