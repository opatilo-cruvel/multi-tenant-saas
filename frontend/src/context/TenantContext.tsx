import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/services/api";

export type Tenant = {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  address?: string;
  description?: string;
  phones?: string[];
};

type TenantContextType = {
  tenant: Tenant | null;
  loading: boolean;
};

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export function TenantProvider({ children }: { children: React.ReactNode }) {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTenant() {
      try {
        const data = await api.getEstablishment();
        setTenant(data);
      } catch (error) {
        console.error("Failed to load tenant", error);
      } finally {
        setLoading(false);
      }
    }

    loadTenant();
  }, []);

  return (
    <TenantContext.Provider value={{ tenant, loading }}>
      {children}
    </TenantContext.Provider>
  );
}

export function useTenantContext() {
  const context = useContext(TenantContext);

  if (!context) {
    throw new Error("useTenantContext must be used within TenantProvider");
  }

  return context;
}
