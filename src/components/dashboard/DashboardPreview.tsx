import { Users, Baby, Clock, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react";

const rooms = [
  { name: "Infant Room A", adults: 3, children: 9, ratio: "1:3", status: "ok" },
  { name: "Toddler Room B", adults: 2, children: 10, ratio: "1:5", status: "ok" },
  { name: "Pre-K Room C", adults: 2, children: 18, ratio: "1:9", status: "warning" },
  { name: "Activity Room", adults: 4, children: 24, ratio: "1:6", status: "ok" },
];

const auditLog = [
  { time: "2:45 PM", event: "Adult entered Infant Room A", change: "+1 adult" },
  { time: "2:30 PM", event: "Child pickup from Toddler Room B", change: "-1 child" },
  { time: "2:15 PM", event: "Ratio restored in Pre-K Room C", change: "Compliant" },
  { time: "2:00 PM", event: "Break coverage for Pre-K Room C", change: "-1 adult" },
];

export function DashboardPreview() {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
      {/* Dashboard header */}
      <div className="bg-foreground px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground">
            <span className="text-xs font-bold text-foreground">LS</span>
          </div>
          <span className="text-sm font-semibold text-primary-foreground">
            LiveSitter Dashboard
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-primary-foreground/60">Sample Dashboard</span>
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs text-success">Live</span>
        </div>
      </div>

      <div className="p-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="dashboard-label">Total Adults</span>
            </div>
            <div className="dashboard-stat">11</div>
          </div>
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-2">
              <Baby className="h-4 w-4 text-accent" />
              <span className="dashboard-label">Total Children</span>
            </div>
            <div className="dashboard-stat">61</div>
          </div>
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-success" />
              <span className="dashboard-label">Rooms Compliant</span>
            </div>
            <div className="dashboard-stat">3/4</div>
          </div>
          <div className="dashboard-card">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="dashboard-label">Weekly Compliance</span>
            </div>
            <div className="dashboard-stat">98.5%</div>
          </div>
        </div>

        {/* Rooms table */}
        <div className="dashboard-card mb-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            Live Occupancy by Room
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 font-medium text-muted-foreground">Room</th>
                  <th className="text-center py-2 font-medium text-muted-foreground">Adults</th>
                  <th className="text-center py-2 font-medium text-muted-foreground">Children</th>
                  <th className="text-center py-2 font-medium text-muted-foreground">Ratio</th>
                  <th className="text-right py-2 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => (
                  <tr key={room.name} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium">{room.name}</td>
                    <td className="py-3 text-center">{room.adults}</td>
                    <td className="py-3 text-center">{room.children}</td>
                    <td className="py-3 text-center font-mono text-xs">{room.ratio}</td>
                    <td className="py-3 text-right">
                      {room.status === "ok" ? (
                        <span className="compliance-ok">
                          <CheckCircle className="h-3 w-3" />
                          Compliant
                        </span>
                      ) : (
                        <span className="compliance-warning">
                          <AlertTriangle className="h-3 w-3" />
                          Watch
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit log */}
        <div className="dashboard-card">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {auditLog.map((entry, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm py-2 border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground w-16">
                    {entry.time}
                  </span>
                  <span className="text-foreground">{entry.event}</span>
                </div>
                <span className="text-xs text-muted-foreground">{entry.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
