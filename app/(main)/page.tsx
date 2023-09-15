import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart } from "@tremor/react";



export default function mainLanding() {
  const employers = [
    // {"name":"Skilled Worker","Number of Employers Hiring":67276},
  {"name":"GBM","Number of Employers Hiring":1905},
  {"name":"IS","Number of Employers Hiring":1004},
  {"name":"Tier 2 MoR","Number of Employers Hiring":967},
  {"name":"CW","Number of Employers Hiring":772},
  {"name":"RW","Number of Employers Hiring":545},
  {"name":"Charity Worker","Number of Employers Hiring":387},
  {"name":"Global Business Mobility: UK Expansion Worker","Number of Employers Hiring":224},
  {"name":"International Agreement","Number of Employers Hiring":107},
  {"name":"Government Authorised Exchange","Number of Employers Hiring":25},
  {"name":"Global Business Mobility: Graduate Trainee","Number of Employers Hiring":13},
  {"name":"Scale-up","Number of Employers Hiring":10},
  {"name":"Seasonal Worker","Number of Employers Hiring":5},
  {"name":"(ICT)","Number of Employers Hiring":1},
  {"name":"GBM:SS","Number of Employers Hiring":1}]

  
  return (
    <main>

      <div>
        <BarChart
          className="mt-6"
          data={employers}
          index="name"
          categories={["Number of Employers Hiring"]}
          colors={["blue"]}
          yAxisWidth={48}

      />
      </div>
      <div className="p-3 m-4 border">
        <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company Name</TableHead>
                <TableHead>Town/City</TableHead>
                <TableHead>Work Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </div>
    </main>
  )
}
