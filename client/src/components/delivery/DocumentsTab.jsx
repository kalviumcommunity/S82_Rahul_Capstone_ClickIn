import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DocumentsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents & Verification</CardTitle>
        <CardDescription>
          Upload and manage your identity and legal documents.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">ID Proof</h3>
            <div className="border rounded-md p-4 bg-muted">
              <p className="text-sm mb-2">Upload a clear photo of your government-issued ID.</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Upload</Button>
                <Button variant="outline" size="sm" disabled>View</Button>
              </div>
              <p className="text-xs text-amber-600 mt-2">Pending verification</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Driver's License</h3>
            <div className="border rounded-md p-4 bg-muted">
              <p className="text-sm mb-2">Upload a clear photo of your driver's license.</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Upload</Button>
                <Button variant="outline" size="sm" disabled>View</Button>
              </div>
              <p className="text-xs text-amber-600 mt-2">Not uploaded</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Background Check</h3>
            <div className="border rounded-md p-4 bg-muted">
              <p className="text-sm mb-2">Consent to a background check for safety and security.</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Initiate Check</Button>
              </div>
              <p className="text-xs text-amber-600 mt-2">Not completed</p>
            </div>
          </div>
          
          <Button>Submit All Documents for Verification</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentsTab;
