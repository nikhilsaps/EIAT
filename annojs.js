console.log("wecome to console of annojs")

const annoTemplates = {

    //write backs  to  account 
    "WB-WA": "***ARI*** \n Task ID: \nContact ID: \nPrimary account: \nCustomer concern: Warn  enforcement appeal \nLatest enforcement: Warn \nPrevious action date:\n Ab Type:  \nEnforcement valid?: Yes/No\nDid customer contact previously for this concern: Yes/No \nAction taken: Deny appeal \nGap ID/Toll Gate Login (if applicable): N/A \nSIM link (if applicable): \nSDS verified (if applicable):  \nJustification:\n ***ARI***\n",
    "WB-AOC": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Cx acct was closed for ab, currently under AOC. Cx is appealing for same \n Latest enforcement: TR \n Previous action date:  \n  Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No\n Action taken: Deny reinstatement \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable): \n Justification:\n ***ARI***\n ",
    "WB-CL": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Reinstatement of the account  \n Latest enforcement: Close \n Previous action date: \n  Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No\n Action taken: Deny reinstatement \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:\n ***ARI***\n ",
    "WB-SOL": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Solicit enforcement appeal \n Latest enforcement: Solicit \n Previous action date:  \n Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Deny appeal \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable): \n Justification:\n ***ARI***\n ",

    //transfer to 
    "T-PRI": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: XXX\n Writeback Action taken: XXX\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:\n  ***ARI***\n ",
    "T-ARM": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: Closure appeal\n Writeback Action taken: Transfer\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:  ,  Notice ac is closed by ARM team, hence transferring to ARM for further assistance\n  ***ARI*** \n ",
    "T-BRI": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: Cx unable to access ac\n Writeback Action taken: Transfer\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:  ,  No ARI action. Ac marked .F hence transferring to BRI\n  ***ARI***\n ",
    "T-BAB": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: Cx unable to access ac\n Writeback Action taken: Transfer\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:  account with AB  bridge action  transfer to  ab to BRI\n  ***ARI***\n ",

    //resolves 

    "RESOL": "***ARI***  \n Task ID:  \n Contact ID:  \n Primary account:  \n Customer concern: XXXX  \n Latest enforcement: XXX  \n Previous action date:   \n Ab Type:   \n Enforcement valid?: Yes/No \n Did customer contact previously for this concern: Yes  \n Action taken: Resolve  \n Gap ID/Toll Gate Login (if applicable): N/A  \n SIM link (if applicable):  \n SDS verified (if applicable):  \n Justification:\n ***ARI*** \n ",
    "LW-SOL": "***ARI*** \n Task ID: \n Contact ID: \n Primary account:\n Customer concern: Solicit appeal \n Latest enforcement: Solicit \n Previous action date: \n  Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes \n Action taken: Resolve \n Gap ID/Toll Gate Login (if applicable):\n SIM link (if applicable): \n SDS verified (if applicable): \n Justification:\n ***ARI***\n ",
    "LW-WA": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Warn appeal \n Latest enforcement: Warn \n Previous action date: \n  Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes \n Action taken: Resolve \n Gap ID/Toll Gate Login (if applicable):\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:\n ***ARI***\n ",
    "LW-CL": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Closure appeal \n Latest enforcement: Close \n Previous action date: \n  Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes \n Action taken: Resolve \n Gap ID/Toll Gate Login (if applicable):\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:\n ***ARI***\n ",
    "LW-REF": "***ARI*** \n Task ID: \n Contact ID:\n Primary account: \n Customer concern: Refund related \n Referred Order ID:\n Latest enforcement: XXX \n Previous action date:\n   Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes \n Action taken: Resolve \n Gap ID/Toll Gate Login (if applicable):\n SIM link (if applicable): \n SDS verified (if applicable): \n Justification: ,  Cx concern is LASTWORDED in previous contact: XXX hence resolving the contact \n ***ARI***\n ",
    "SPM": "***ARI*** \n Task ID: \n Contact ID: \n Primary account:  \n Customer concern: Non amazon issue \n Latest enforcement: N/A \n Previous action date:  N/A \n Ab Type:  \n Enforcement valid? N/A \n Did customer contact previously for this concern: No \n Action taken: Spam \n Gap ID/Toll Gate Login (if applicable):\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:  ,  Not related to amazon or cx account. Random links Hence marking spam \n ***ARI***\n ",
    "INTL": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Not cx inquiry. Internal referral by @   for buyer ab investigation \n Latest enforcement: N/A \n Previous action date:  N/A \n Ab Type:  \n Enforcement valid? N/A \n Did customer contact previously for this concern: No \n Action taken: Resolve \n Gap ID/Toll Gate Login (if applicable): N/A \n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:\n ***ARI***\n ",

    //Temprary  reinstate  
    "TR-GC": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: GC issue\n Writeback Action taken: TR & Reply\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:    Valid closure, has GC balance hence TR\n  ***ARI***\n ",
    "TR-PRI": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: GC issue\n Writeback Action taken: TR & Reply\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:   Valid closure, has prime subscription hence TR\n  ***ARI***\n ",
    "TR-INVO": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Order ID/Subscription: \n Customer Concern: Invoice request\n Writeback Action taken: TR & Reply\n Gap ID/Toll Gate Login (if applicable): N/A\n Justification:  Valid closure, hence TR for two days\n  ***ARI*** \n ",
    "TR-DIGI": "***ARI***  \n Task ID:  \n Contact ID:  \n Primary account:  \n Order ID/Subscription: \n Customer Concern: \n Writeback Action taken:  \n Gap ID/Toll Gate Login (if applicable):  \n Justification:  , \n  #DIGITALQUERY \n ***ARI***\n ",

    // CAS and reinstate
    "CAS-SOL": "***ARI*** \n Task ID:\n Contact ID:\n Primary account:\n Customer concern: Solicit enforcement appeal \n Latest enforcement: Solicit \n Previous action date:   \n Ab Type: XXX \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Clear abuse \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable):    \n Justification:   \n ***ARI***\n ",
    "CAS-WA": "***ARI*** \n Task ID: \n Contact ID: \n Primary account:\n Customer concern: Policy warning enforcement appeal \n Latest enforcement: Policy warning \n Previous action date:   \n Ab Type: XXX \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Clear abuse \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable):    \n Justification:  \n ***ARI***\n ",
    "UPO": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: RPO enforcement appeal \n Latest enforcement: RPO \n Previous action date:  \n Ab Type: XXX \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Reinstate \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable):   \n Justification:  ,   \n ***ARI***\n ",
    "REINS": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Closure enforcement appeal \n Latest enforcement: Close \n Previous action date:  \n Ab Type: XXX \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Reinstate \n Gap ID/Toll Gate Login (if applicable): \n SIM link (if applicable): \n SDS verified (if applicable):   \n Justification:  ,   \n ***ARI***\n ",

    //Other  reply to 
    "OLR-REF": "***ARI***\n Concession request reviewed and approved by the ARI team. ARI enforcement on account has been reversed. Issue a refund for\n Order id : xx\n ASIN - xx\n Concession value: xx\n ***ARI***\n ",
    "DIFF": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: XXXX \n Latest enforcement: XXXX \n Previous action date: \n  Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Reply \n Gap ID/Toll Gate Login:  N/A\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:  ,  Noted that cx is writing from a different email or contacting about a diff AC ID: xxx. Hence requesting to contact from registered email \n ***ARI***\n ",
    "M-INFO": "***ARI*** \n Task ID: \n Contact ID: \n Primary account: \n Customer concern: Cx concern not clear \n Latest enforcement:\n Previous action date:   \n Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Reply \n Gap ID/Toll Gate Login:  N/A\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:  ,  Cx concern not clear hence replying asking more info \n ***ARI***\n ",
    "RT-FD": "***ARI*** \n Task ID: \n Contact ID: \n Referred Order ID:\n Primary account: \n Customer concern: Return refund status on order# XXX \n Latest enforcement:\n Previous action date:  \n Ab Type:  \n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Reply \n Gap ID/Toll Gate Login:  N/A\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:\n ***ARI***\n ",
    "DM-RF": "***ARI*** \n Task ID: \n Contact ID: \n Referred Order ID:\n Primary account: \n Customer concern: Refund on order#\n Latest enforcement: XXXX \n Previous action date:   \n Ab Type:\n Enforcement valid?: Yes/No\n Did customer contact previously for this concern: Yes/No \n Action taken: Reply \n Gap ID/Toll Gate Login:  N/A\n SIM link (if applicable): \n SDS verified (if applicable):  \n Justification:  ,  Order# XXX considered for enforcement that has DNR/MDR . Hence denying refund appeal \n ***ARI***\n ",
    "QLA-D": "***ARI*** \nTask ID: \nContact ID: \nReferred Order ID:\nPrimary account: \nCustomer concern: QLA order cancellation appeal \nLatest enforcement:  \nPrevious action date:   \nAb Type:  \nEnforcement valid? Yes \nDid customer contact previ\nusly for this concern: No \nAction taken: Reply \nGap ID/Toll Gate Login:  N/A\nSIM link (if applicable): \nSDS verified (if applicable):  \nJustification:  ,   order cancellation was done considering customer is exceeding the QLA limit, on Asin: XXXX, hence replying accordingly \n***ARI***\n",

    // AFN Basic  anno
    "CONC-TTM":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count: TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Justification: \n ***ARI***\n ",
    "CONC-PA":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n Gap ID Login: \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Justification: \n ***ARI***\n",
    "CONC-Cluster-TTM":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n TTM Aggregate AFN Orders:\n TTM Aggregate AFN Orders Value:\n TTM Aggregate AFN NS Concessions:\n TTM Aggregate AFN NS Concessions Count:\n TTM Aggregate AFN DNR Concessions:\n TTM Aggregate AFN DNR Concessions Count:\n TTM Aggregate AFN In-Transit Amount:\n TTM Aggregate AFN In-Transit Count:\n TTM Aggregate NSSI:\n TTM Aggregate DNRSI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***",
    "CONC-Cluster-PA":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n Post Warned Aggregate AFN orders:\n Post Warned Aggregate AFN orders value:\n Post Warned Aggregate AFN NS Concessions Count:\n Post Warned Aggregate AFN NS Concessions:\n Post Warned Aggregate AFN DNR Concessions Count:\n Post Warned Aggregate AFN DNR Concessions:\n Post Warned Aggregate AFN In-Transit Count:\n Post Warned Aggregate AFN In-Transit Amount:\n Post Warned Aggregate NSSI:\n Post Warned Aggregate DNRSI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***",

    // MFN Basic
    "MFN-NA":
        "***ARI*** \n Task ID: \n Primary account: \n Action Taken: No action \n Referred order ID: \n Rel Customers:  \n TTM MFN orders count: \n TTM MFN orders amount: \n TTM MFN NOTR units count: \n TTM MFN NOTR units amount: \n TTM MFN DIFF units count: \n TTM MFN DIFF units amount: \n TTM MFN NSR units count: \n TTM MFN NSR units amount: \n TTM MFN MDR units count: \n TTM MFN MDR units amount: \n TTM MFN FLR units count: \n TTM MFN FLR units amount: \n TTM MFN RR units count: \n TTM MFN RR units amount: \n TTM MFN Returns units count: \n TTM MFN Returns units amount: \n TTM MFN NOTR SI: \n TTM MFN DIFF SI: \n TTM MFN MDR units SI: \n TTM MFN NSR units SI: \n TTM MFN FLR units SI: \n TTM MFN RR SI: \n TTM MFN Returns SI: \n Previous action date:  \n MUA Business ID: \n Justification:   \n ***ARI*** \n ",
    "MFN-Sol":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: Solicit\n Referred order ID:\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n MUA Business ID:\n Justification:  \n ***ARI***\n ",
    "MFN-WA":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: Warn\n Referred order ID:\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n ***ARI***\n ",
    "MFN-CL":
        "***ARI***\n Task ID:\n Primary account:\n Action Taken: Close\n Referred order ID:\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n ***ARI***\n ",

    //CAP  anno
    "CAP-TTM":
        "***ARI***\n ARI Action: Pass\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "CAP-Solicit":
        "***ARI***\n ARI Action: Solicit\n CAP Team: Add Friction\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Solicit\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "CAP-NA-PA":
        "***ARI***\n ARI Action: Pass\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "CAP-Warning":
        "***ARI***\n ARI Action: Warn\n CAP Team: Add Friction\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Warn\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "CAP-Closure":
        "***ARI***\n ARI Action: Close\n CAP Team: Deny Concessions\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "CAP-Duplicate":
        "***ARI***\n  ARI Action: Pass\n  CAP Team: Duplicate OID Referral: ARI Recommendation shared already\n  Referred Order: \n  ***ARI***\n  ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n  ***ARI***\n  Task ID:\n  Primary account:\n  Action Taken: No action\n  Prior enforcement on Primary: Solicit/Warn\n  Rel Customers: \n  TTM AFN Orders: \n  TTM AFN Orders Value:\n  TTM AFN NSC Count:\n  TTM AFN NSC Amount :\n  TTM AFN DNR Count:\n  TTM AFN DNR Amount :\n  TTM AFN MDR Count:\n  TTM AFN MDR Amount :\n  TTM AFN RR Count:\n  TTM AFN RR Amount:\n  TTM AFN FLR Count:\n  TTM AFN FLR Amount:\n  TTM AFN In-Transit Count:\n  TTM AFN In-Transit Amount:\n  TTM AFN NSC SI:\n  TTM AFN DNR SI:\n  TTM AFN MDR SI:\n  TTM AFN RR SI:\n  TTM AFN FLR SI:\n  TTM AFN Intransit SI:\n  Previous action date: \n  Post Warned AFN Orders: \n  Post Warned AFN Orders Value:\n  Post Warned AFN NSC Count:\n  Post Warned AFN NSC Amount :\n  Post Warned AFN DNR Count:\n  Post Warned AFN DNR Amount :\n  Post Warned AFN MDR Count:\n  Post Warned AFN MDR Amount :\n  Post Warned AFN RR Count:\n  Post Warned AFN RR Amount:\n  Post Warned AFN FLR Count:\n  Post Warned AFN FLR Amount:\n  Post Warned AFN In-Transit Count:\n  Post Warned AFN In-Transit Amount:\n  Post Warned AFN NSC SI:\n  Post Warned AFN DNR SI:\n  Post Warned AFN MDR SI:\n  Post Warned AFN RR SI:\n  Post Warned AFN FLR SI:\n  Post Warned AFN Intransit SI:\n  Post warned MFN orders:\n  Post warned MFN orders value:\n  Post warned MFN orders Concessions:\n  Post warned MFN SI:\n  FLSI Program Type:\n  FLSI Program TTM concession count:\n  FLSI Program TTM concession amount:\n  FLSI Program TTM concession SI:\n  Gap ID Login:  \n  SDS verified (if applicable):Yes/No\n  MUA Business ID:\n  Justification: \n  ***ARI***\n  \n  ",

    //MDR  anno
    "MDR-No-Action":
        "***ARI***\n ARI Action: Pass\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "MDR-Solicit":
        "***ARI*** \n ARI Action: Solicit \n CAP Team: Deny Concessions \n Referred Order:  \n ***ARI*** \n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER*** \n ***ARI*** \n Task ID: \n Primary account: \n Action Taken: Solicit \n Rel Customers:  \n TTM AFN Orders:  \n TTM AFN Orders Value: \n TTM AFN NSC Count: \n TTM AFN NSC Amount : \n TTM AFN DNR Count: \n TTM AFN DNR Amount : \n TTM AFN MDR Count: \n TTM AFN MDR Amount : \n TTM AFN RR Count: \n TTM AFN RR Amount: \n TTM AFN FLR Count: \n TTM AFN FLR Amount: \n TTM AFN In-Transit Count: \n TTM AFN In-Transit Amount: \n TTM AFN NSC SI: \n TTM AFN DNR SI: \n TTM AFN MDR SI: \n TTM AFN RR SI: \n TTM AFN FLR SI: \n TTM AFN Intransit SI: \n Total MFN orders: \n Total MFN orders value: \n Total MFN Concessions: \n Total MFN SI: \n Gap ID Login:   \n SDS verified (if applicable):Yes/No \n MUA Business ID: \n Justification:  \n ***ARI*** \n ",
    "MDR-Warning":
        "***ARI*** \n ARI Action: Warn \n CAP Team: Deny Concessions \n Referred Order:  \n ***ARI*** \n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER*** \n ***ARI*** \n Task ID: \n Primary account: \n Action Taken: Warn \n Prior enforcement on Primary: Solicit/Warn \n Rel Customers:  \n TTM AFN Orders:  \n TTM AFN Orders Value: \n TTM AFN NSC Count: \n TTM AFN NSC Amount : \n TTM AFN DNR Count: \n TTM AFN DNR Amount : \n TTM AFN MDR Count: \n TTM AFN MDR Amount : \n TTM AFN RR Count: \n TTM AFN RR Amount: \n TTM AFN FLR Count: \n TTM AFN FLR Amount: \n TTM AFN In-Transit Count: \n TTM AFN In-Transit Amount: \n TTM AFN NSC SI: \n TTM AFN DNR SI: \n TTM AFN MDR SI: \n TTM AFN RR SI: \n TTM AFN FLR SI: \n TTM AFN Intransit SI: \n Previous action date:  \n Post Warned AFN Orders:  \n Post Warned AFN Orders Value: \n Post Warned AFN NSC Count: \n Post Warned AFN NSC Amount : \n Post Warned AFN DNR Count: \n Post Warned AFN DNR Amount : \n Post Warned AFN MDR Count: \n Post Warned AFN MDR Amount : \n Post Warned AFN RR Count: \n Post Warned AFN RR Amount: \n Post Warned AFN FLR Count: \n Post Warned AFN FLR Amount: \n Post Warned AFN In-Transit Count: \n Post Warned AFN In-Transit Amount: \n Post Warned AFN NSC SI: \n Post Warned AFN DNR SI: \n Post Warned AFN MDR SI: \n Post Warned AFN RR SI: \n Post Warned AFN FLR SI: \n Post Warned AFN Intransit SI: \n Post warned MFN orders: \n Post warned MFN orders value: \n Post warned MFN orders Concessions: \n Post warned MFN SI: \n FLSI Program Type: \n FLSI Program TTM concession count: \n FLSI Program TTM concession amount: \n FLSI Program TTM concession SI: \n Gap ID Login:   \n SDS verified (if applicable):Yes/No \n MUA Business ID: \n Justification:  \n ***ARI*** \n ",
    "MDR-Closure":
        "***ARI***\n ARI Action: Close\n CAP Team: Deny Concessions\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "MDR-NA-PA":
        "***ARI***\n ARI Action: No action\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "MDR-Duplicate":
        "***ARI***\n ARI Action: Pass\n CAP Team: Duplicate OID Referral: ARI Recommendation shared already\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",

    //AFN RI  anno
    "RI-NA":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: No action\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "RI-NA-PA":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "RI-Solicit":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Solicit\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "RI-Warning":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Warn\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
    "RI-Closure":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",

    //MFN RI
    "MRI-NA":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: No action\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n MUA Business ID:\n Justification:  \n R&R Hashtag : \n ***ARI***\n ",
    "MRI-SOL":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Solicit\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n MUA Business ID:\n Justification:  \n R&R Hashtag : \n ***ARI***\n ",
    "MRI-WA":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Warn\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n ***ARI***\n ",
    "MRI-CL":
        "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Close\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n***ARI***\n ",

    //AtoZ anno
    "NA-A":
        "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : No action \n MUA Business ID:\n Justification: \n R&R Hashtag : \n ***ARI***\n ",
    "SOL-A":
        "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : Solicit\n MUA Business ID:\n Justification: \n R&R Hashtag : \n ***ARI***\n ",
    "WARN-A":
        "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : warn\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n ***ARI***\n ",
    "CLOSE-A":
        "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : close\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n ***ARI***\n ",
    "Para-N":
        "*** ARI ***  \n ##AtoZClaims  \n Task ID:  ParagonTaskID \n Claim order:  \n Reason for Claim:  \n BSM Outcome: \n Justification: \n ***ARI***\n ",


};


function createEQAnnoSidenav() {
    const myDiv2 = document.createElement("div");
    myDiv2.innerHTML = `
      <div class="anno-sidenav grow">
        <h2 class="anno-h2"></h2>
        <button class="anno-dropdown-btn">WriB</button>
        <div class="anno-dropdown-content">
          <a class="annobar" id="WB-WA" href="javascript:void(0)">warn</a>
          <a class="annobar" id="WB-AOC" href="javascript:void(0)">aoc</a>
          <a class="annobar" id="WB-CL" href="javascript:void(0)">close</a>
          <a class="annobar" id="WB-SOL" href="javascript:void(0)">sol</a>
        </div>
  
        <button class="anno-dropdown-btn">Trnsfr</button>
        <div class="anno-dropdown-content">
          <a class="annobar" id="T-PRI" href="javascript:void(0)">Pri@</a>
          <a class="annobar" id="T-ARM" href="javascript:void(0)">arm</a>
          <a class="annobar" id="T-BRI" href="javascript:void(0)">bri</a>
          <a class="annobar" id="T-BAB" href="javascript:void(0)">busiAB</a>
        </div>
  
        <button class="anno-dropdown-btn">resolve</button>
        <div class="anno-dropdown-content">
        <a class="annobar" id="RESOL" href="javascript:void(0)">resolved</a>
          <a class="annobar" id="LW-SOL" href="javascript:void(0)">sol lwed</a>
          <a class="annobar" id="LW-WA" href="javascript:void(0)">wa lwed</a>
          <a class="annobar" id="LW-CL" href="javascript:void(0)">cl lwed</a>
          <a class="annobar" id="LW-REF" href="javascript:void(0)">ref lwed</a>
          <a class="annobar" id="SPM" href="javascript:void(0)">spam</a>
          <a class="annobar" id="INTL" href="javascript:void(0)">intl ref</a>
         </div>
  
         <button class="anno-dropdown-btn">Temp</button>
        <div class="anno-dropdown-content">
          <a class="annobar" id="TR-GC" href="javascript:void(0)">tr gc</a>
          <a class="annobar" id="TR-PRI" href="javascript:void(0)">tr prime</a>
          <a class="annobar" id="TR-INVO" href="javascript:void(0)">tr invo</a>
          <a class="annobar" id="TR-PRIA" href="javascript:void(0)">tr pri@</a>
          <a class="annobar" id="TR-DIGI" href="javascript:void(0)">tr digi</a>
        </div>
  
        <button class="anno-dropdown-btn">Cas/Re</button>
        <div class="anno-dropdown-content">
          <a class="annobar" id="CAS-SOL" href="javascript:void(0)">cas sol</a>
          <a class="annobar" id="CAS-WA" href="javascript:void(0)">cas wa</a>
          <a class="annobar" id="UPO" href="javascript:void(0)">upo</a>
          <a class="annobar" id="REINS" href="javascript:void(0)">reins</a>
          <a class="annobar" id="RPO" href="javascript:void(0)">rpo</a>
        </div>
        <button class="anno-dropdown-btn">Other</button>
        <div class="anno-dropdown-content">
          <a class="annobar" id="OLR-REF" href="javascript:void(0)">olr rfnd</a>
          <a class="annobar" id="DIFF" href="javascript:void(0)">diff cx</a>
          <a class="annobar" id="M-INFO" href="javascript:void(0)">more info</a>
          <a class="annobar" id="RT-FD" href="javascript:void(0)">rtrn rfnd</a>
          <a class="annobar" id="DM-RF" href="javascript:void(0)">d/m rfnd</a>
          <a class="annobar" id="QLA-D" href="javascript:void(0)">qla deny</a>
        </div>
      </div>
    `;

    myDiv2.setAttribute("class", "anno-sidenav grow");
    document.body.appendChild(myDiv2);
}

function createNEQAnnoSidenav(){
    const myDiv2 = document.createElement("div");
    myDiv2.innerHTML = `<div class="anno-sidenav grow">
    <h2 class="anno-h2"></h2>
      <button class="anno-dropdown-btn">AFN</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id="CONC-TTM" href="javascript:void(0)">TTM</a>
        <a class="annobar" id="CONC-PA" href="javascript:void(0)">PA</a>
        <a class="annobar" id="CONC-Cluster-TTM" href="javascript:void(0)">TTM Cluster</a>
        <a class="annobar" id="CONC-Cluster-PA" href="javascript:void(0)">PA Cluster</a>
      </div>
      <button class="anno-dropdown-btn">MFN</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id="MFN-NA" href="javascript:void(0)">MFN NA</a>
        <a class="annobar" id="MFN-Sol" href="javascript:void(0)">MFN Sol</a>
        <a class="annobar" id="MFN-WA" href="javascript:void(0)">MFN WA</a>
        <a class="annobar" id="MFN-CL" href="javascript:void(0)">MFN CL</a>
      </div>
      <button class="anno-dropdown-btn">RI</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id="RI-NA" href="javascript:void(0)">No action</a>
        <a class="annobar" id="RI-NA-PA" href="javascript:void(0)">No action - PA</a>
        <a class="annobar" id="RI-Solicit" href="javascript:void(0)">Solicit</a>
        <a class="annobar" id="RI-Warning" href="javascript:void(0)">Warning</a>
        <a class="annobar" id="RI-Closure" href="javascript:void(0)">Closure</a>
      </div>
      <button class="anno-dropdown-btn">MFN RI</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id="MRI-NA" href="javascript:void(0)">No action</a>
        <a class="annobar" id="MRI-SOL" href="javascript:void(0)">Solicit</a>
        <a class="annobar" id="MRI-WA" href="javascript:void(0)">Warning</a>
        <a class="annobar" id="MRI-CL" href="javascript:void(0)">Closure</a>
      </div>
      <button class="anno-dropdown-btn">MDR</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id="MDR-No-Action" href="javascript:void(0)">No Action</a>
        <a class="annobar" id="MDR-NA-PA" href="javascript:void(0)">No Action- PA</a>
        <a class="annobar" id="MDR-Solicit" href="javascript:void(0)">Solicit</a>
        <a class="annobar" id="MDR-Warning" href="javascript:void(0)">Warning</a>
        <a class="annobar" id="MDR-Closure" href="javascript:void(0)">Closure</a>
        <a class="annobar" id="MDR-Duplicate" href="javascript:void(0)">Duplicate Referral Pass</a>
      </div>
      <button class="anno-dropdown-btn">CAP</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id="CAP-TTM" href="javascript:void(0)">TTM</a>
        <a class="annobar" id="CAP-NA-PA" href="javascript:void(0)">No Action - PA</a>
        <a class="annobar" id="CAP-Solicit" href="javascript:void(0)">Solicit</a>
        <a class="annobar" id="CAP-Warning" href="javascript:void(0)">Warning</a>
        <a class="annobar" id="CAP-Closure" href="javascript:void(0)">Closure</a>
        <a class="annobar" id="CAP-Duplicate" href="javascript:void(0)">Duplicate Referral Pass</a>
      </div>
      <button class="anno-dropdown-btn">AtoZ</button>
      <div class="anno-dropdown-content">
      <a class="annobar" id = "Para-N" href="javascript:void(0)">Paragon</a>
      <a class="annobar" id = "NA-A" href="javascript:void(0)">No action</a>
      <a class="annobar" id = "SOL-A" href="javascript:void(0)">Solicit</a>
      <a class="annobar" id = "WARN-A" href="javascript:void(0)">Warn </a>
      <a class="annobar" id = "CLOSE-A" href="javascript:void(0)">Close</a>
      </div>
      <button class="anno-dropdown-btn">Dropship</button>
      <div class="anno-dropdown-content">
        <a class="annobar" id = "W-DS" href="javascript:void(0)">Warn</a>
        <a class="annobar" id = "C-DS" href="javascript:void(0)">close</a>
        <a class="annobar" id = "RPO-DS" href="javascript:void(0)">Restrict</a>
        <a class="annobar" id = "AC-SELL" href="javascript:void(0)">Active seller</a>
        <a class="annobar" id = "AB-F" href="javascript:void(0)">Abusive</a>
        <a class="annobar" id = "EXEC-P" href="javascript:void(0)">Exception</a>
        <a class="annobar" id = "NO-STO" href="javascript:void(0)">no store front</a>
        <a class="annobar" id = "NO-RESE" href="javascript:void(0)">no reselling</a>
        <a class="annobar" id = "OT-DS" href="javascript:void(0)">other</a>
        <a class="annobar" id = "PW-NA" href="javascript:void(0)">PW no action  </a>
      </div>
     
    </div>`;

    myDiv2.setAttribute("class", "anno-sidenav grow");
    document.body.appendChild(myDiv2);
}

function addCssStyles() {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
  .anno-sidenav {
      width: auto;
      position: fixed;
      z-index: 9999;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      border: 0px solid;
      overflow: hidden;
      box-shadow: 5px 0px 5px 0px rgba(0,0,0,0.1);
    }
  
    .anno-sidenav a,
    .anno-dropdown-btn {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 14px;
      color: #818181;
      display: block;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      cursor: pointer;
      outline: none;
    }
  
    .anno-active {
      background-color: green;
      color: white;
    }
  
    .anno-sidenav a:hover,
    .anno-dropdown-btn:hover,
    .anno-h2 {
      color: #f1f1f1;
      font-size: 14px;
    }
  
    .anno-h2 {
      text-align: center;
    }
  
    .grow {
      border-radius: 5px 5px 0 0;
      height: 25px;
      float: left;
      max-height: 150%;
    }
  
    .grow:hover {
      height: auto;
    }
  
    .anno-dropdown-content {
      display: none;
      position: relative;
      background-color: #f1f1f1;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }
  
    .anno-dropdown-content a {
      color: black;
      text-decoration: none;
      display: block;
    }
  
    .anno-dropdown-content a:hover {
      background-color: #ddd;
    }
  `;
    document.head.appendChild(styleElement);
}

function addEventListeners() {
    const dropdownButtons = document.getElementsByClassName("anno-dropdown-btn");
    const annolinks = document.getElementsByClassName("annobar");

    for (let i = 0; i < dropdownButtons.length; i++) {
        dropdownButtons[i].addEventListener("click", handleDropdownClick);
    }

    for (let i = 0; i < annolinks.length; i++) {
        annolinks[i].addEventListener("click", handleAnnolinkClick);
    }
}

function handleDropdownClick() {
    this.classList.toggle("anno-active");
    const dropdownContent = this.nextElementSibling;
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function handleAnnolinkClick() {
    const invAnnotations = document.getElementById("annotationText").value;
    const orderIDMatch = /\d{3}-\d{7}-\d{7}/.exec(invAnnotations);
    const riMatch = /RI Intercepted Order ID:/.exec(annoTemplates[this.id]);
    const orMatch = /Referred Order: ?()?/.exec(annoTemplates[this.id]);
    const coMatch = /Claim order:/.exec(annoTemplates[this.id]);

    let toClipboard = annoTemplates[this.id];
    if (orderIDMatch !== null && orMatch !== null) {
        const fullText = annoTemplates[this.id].replace(orMatch[0], orMatch[0] + orderIDMatch[0]);
        toClipboard = fullText.replace("Justification:", "Justification: " + invAnnotations);
    } else if (orderIDMatch !== null && riMatch !== null) {
        const fullText = annoTemplates[this.id].replace(riMatch[0], riMatch[0] + orderIDMatch[0]);
        toClipboard = fullText.replace("Justification:", "Justification: " + invAnnotations);
    } else if (coMatch !== null && orderIDMatch !== null) {
        const fullText = annoTemplates[this.id].replace(coMatch[0], coMatch[0] + " " + orderIDMatch[0]);
        toClipboard = fullText.replace("Justification:", "Justification: " + invAnnotations);
    } else {
        toClipboard = annoTemplates[this.id].replace("Justification:", "Justification: " + invAnnotations);
    }

    copyToClipboard(toClipboard);
    resetDropdown();
}

function copyToClipboard(value) {
    const tempInput = document.createElement("textarea");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    tempInput.remove();
    window.scrollTo(0, 0);
}

function resetDropdown() {
    const dropdownButtons = document.getElementsByClassName("anno-dropdown-btn");
    const dropdownContents = document.getElementsByClassName("anno-dropdown-content");

    for (let i = 0; i < dropdownButtons.length; i++) {
        dropdownButtons[i].classList.remove("anno-active");
    }

    for (let j = 0; j < dropdownContents.length; j++) {
        dropdownContents[j].style.display = "none";
    }
}


//taking the type of task into consideration  

const a = document.getElementsByClassName("pi-widgets nautilus-widgets")[0];
const jsonstring = a.dataset.pageContext;

try {
    const jsonObject = JSON.parse(jsonstring);
    let que = jsonObject.queueName;

    if (que.includes("email")) {
        createEQAnnoSidenav();
        
    } else {
        createNEQAnnoSidenav();
       
    }
    

} catch (error) {
    console.error("Error parsing JSON:", error);
}



addCssStyles();
addEventListeners();

