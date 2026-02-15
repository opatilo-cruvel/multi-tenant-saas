import { useEffect, useState } from "react";
import { api } from "@/services/api";
import type { Service } from "@/types/service";

type UseServicesReturn = {
  services: Service[];
  loading: boolean;
  error: string | null;
};

export function useServices(): UseServicesReturn {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await api.getServices();

        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      } catch (err) {
        console.error("Failed to load services", err);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    }

    loadServices();
  }, []);

  return { services, loading, error };
}
