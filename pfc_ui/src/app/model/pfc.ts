export class PFC {
  action: number;
  id: string;
  carrierCode: string;
  status: string;
  sequenceNumber: number;
  effectiveDate: string;
  discontinueDate: string;

  populateData(row: TRow): void {
    this.action = row['Changed'];
    this.id = row['id'];
    this.carrierCode = row['carrierCode'];
    this.status = row['status'];
    this.sequenceNumber = row['sequenceNumber'];
    this.effectiveDate = row['effectiveDate'];
    this.discontinueDate = row['discontinueDate'];
  }
}
