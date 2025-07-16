import type { ServiceUser } from "@/types/service-users/service-users";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./service.css";
import Loading from "@/components/loading/loading";

import Button from "@/components/ui/button/button";
import Errors from "@/components/error/error";

export default function Service() {
  const [users, setUsers] = useState<ServiceUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Errors error={{ message: error }} />;
  }

  return (
    <main className="service">
      <section className="service-container">
        <div className="container">
          <div className="service-wrapper">
            {users.map((user) => (
              <div className="service-user-card" key={user.id}>
                <div className="user-card-header">
                  <div className="user-avatar">
                    <span>{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="user-title">
                    <div className="user-name">{user.name}</div>
                    <div className="user-nikname">{user.username}</div>
                  </div>
                </div>
                <div className="user-card-content">
                  <div className="user-details">
                    <p>{user.company.name}</p>
                  </div>
                </div>
                <div className="user-card-footer">
                  <Link to={`/service/users/${user.id}`}>
                    <Button className="btn-white">Show details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
