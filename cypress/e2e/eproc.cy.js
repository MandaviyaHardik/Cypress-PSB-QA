/// <reference types="Cypress" />


describe('psb QA', () => {
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  it('Add1', () => {
    cy.viewport(1280, 720) // width and height in pixels
    cy.visit('https://psb.procure247.com')
    cy.get('html > body > app-root > div:nth-of-type(1) > app-header > div > app-before-login-header > header > div:nth-of-type(2) > div > div > div:nth-of-type(2) > div:nth-of-type(1) > ul > li:nth-of-type(5) > a > span:nth-of-type(2)').click()
    cy.get('#username').type('makerhardiksbi')
    cy.get('#password').type('Change@123')
    cy.get('#loginBtn').click()
    cy.get('#otp').click()
    cy.wait(10000)
    cy.get('#loginOtpBtn').click()
    cy.get(':nth-child(3) > .dropdown-toggle > div').click()
    cy.get('.open > .dropdown-menu > :nth-child(1) > .hvr-underline-from-center').click()
    cy.get('#custId').type('98362532',{ delay: 0 })
    cy.get('#propertyUniqueId').type('61215456',{ delay: 0 });  // duplicate
    cy.get('#collateralId').type('14289216',{ delay: 0 });     // duplicate
    cy.get('#propertyTypeId').select('1')
    cy.get('#propertySubTypeId').select("1")
    cy.get('#propertySubTypeId').select('1')
    cy.get('#propertyTitleDeedTypeId').select('Registered Sale Deed')
    cy.get('#borrowerName').type('hardik mandaviya')
    cy.get('#borrowerAddress').type('jamnagar')
    cy.get('#isCoBorrowerAvailable').select('0')
  // cy.get("input[id='propertyDetailCoBorrowerDataBean[0].coBorrowerName']").type('hardik mandaviya')
    //cy.get("input[id='propertyDetailCoBorrowerDataBean[0].coBorrowerAddress']").type('jamnagar')
    cy.get('#isGuarantorAvailable').select('1')
    cy.get('#isMultiGuarantorAvailable').select('1')    
    cy.get("input[name='propIsMultiGuarantor[0].guarantorName']").type('hardik mandaviya')
    cy.get("input[name='propIsMultiGuarantor[0].guarantorAddress']").type('jamnagar')
    cy.get('#ownerName').type('hardik')
    cy.get('#propertyOwnershipTypeId').select('1')
    cy.get('#address').type('jamnagar')
    cy.get('#locality').type('patel colony')
    cy.get('#latitude').type('20.20')
    cy.get('#longitude').type('60.60')  
    //cy.get('#stateID').select('11')
    //cy.get('#districtID').select('179')
    //cy.get('#cityID').select('3689')
    cy.get('#pincode').type('380015')
    cy.get('#summaryDesc').type('new property')
    cy.get('#propertyPossessionTypeId').select('2')
    cy.get('#physicalpossdate').type('02-07-2024')
    cy.get('#symbolicPossDate').type('02-07-2024')
    cy.get('#propertyTypeOfActionId').select('Under SARFAESI')
    cy.get('#nearestAirBusRailStation').type('near metro')
    cy.get('#npaDate').type('01-07-2024')
    cy.get('#npaAmount').type('50000')
    cy.get('#propertyPrice').type('90000')
    cy.get('#assetClassificationId').select('Loss')
    cy.get('#assetClassDate').type('02-07-2024')
    cy.get('#demandNotice').type('02-07-2024')
    cy.get('#demandNoticeAmount').type('60000')
    cy.get('#ownerRelationShipId').select('Borrower')
    cy.get('#cersaiId').type('061602',{ delay: 0 })             //duplicate
    cy.get('#propertyUsp').type('done property')
    cy.get('#submitBtn').click()
    cy.get('.btn-primary').click()

 // Add Additional Property Detail

    cy.get('#uom').select('sq feet')
    cy.get('.Map_screen2 > :nth-child(1) > :nth-child(3) > .form-group').type('56956')
    cy.get('#builtUpAreaSqFeet').type('5652')
    cy.get('#pricePerSqFeet').type('1542')
    cy.get('#noofRooms').type('5')
    cy.get('#projectName').type('shivalik')
    cy.get('.multiselect-selected-text').click()
    cy.get(':nth-child(1) > a > .checkbox > input').click()
    cy.get(':nth-child(2) > a > .checkbox > input').click()
    cy.get(':nth-child(3) > a > .checkbox > input').click()
    cy.get('#furnishedStatus').select('Semi-Furnished')
    cy.get('#ageOfConstruction').type('5')
    cy.get('#waterAvailability').type('yes')
    cy.get('#floorNo').type('9')
    cy.get('#totalNoOfFloors').type('50')    
    cy.get('#unitOnFloor').type('5')
    cy.get('#nearByEduInst').type('yes available')
    cy.get('#nearByShopCenters').type('yes available')
    cy.get('#nearByLocalities').type('yes available')
    cy.get('#nearByCommHub').type('yes available')
    cy.get('#noOfCarParking').type('5')
    cy.get('#washRooms').type('yes available')
    cy.get('#nameOfDev').type('hardik mandaviya')
    cy.get('#statusOfElectricity').type('yes')
    cy.get('#facing').select('North-East')
    cy.get('#otherDetail').type('done')
    cy.get('#submitBtn').click()


  // Upload Image & Video
  
   cy.get('#isMainImage').select('Yes')
   cy.get('#propertyImage').selectFile('C:\\Users\\hardik.mandaviya\\Desktop\\Pi7_Tool_a2 (1).jpeg')
   cy.get('#submitBtn').click()
   cy.get('.modal-footer > .btn-primary').click()
   cy.get('.col-lg-12 > .btn').click()

  // Upload Document

   cy.get('#fileToUpload').selectFile('C:/Users/hardik.mandaviya/Desktop/Preface.pdf')
   cy.get('#description').type('doc uploaded')
   cy.get('#submitBtn').click()
   cy.get('.col-lg-12 > .btn').click()
  

  // Send Property for Approval

   cy.get('.col-sm-7 > #sentTo').select('79')
   cy.get('#remarks').type('Property has sent been sent to checker')
   cy.get('#submitBtn').click()
   cy.get('.btn-primary').click()
  
  // logout

    cy.get(':nth-child(7) > .hvr-underline-from-center').click()
   
   

  // login with checker
 
   cy.get('#username').type('checkerhardiksbi')
   cy.get('#password').type('Change@123')
   cy.get('#loginBtn').click()
   cy.get('#otp').click()
   cy.wait(10000)
   cy.get('#loginOtpBtn').click()


    cy.get(':nth-child(3) > .dropdown-toggle > div').click()// click on property
    cy.get('.open > .dropdown-menu > li > .hvr-underline-from-center').click()// click on search property
   cy.get('[tabindex="0"] > a').click() // pending tab
   cy.wait(3000)
   cy.get(':nth-child(4) > .text-left > .tablink > :nth-child(1) > a').click() // review and approve link
   cy.get('#action').select('1')
   cy.get('#remarks').type('Property is approved')
   cy.get('#confirmed').click()
   cy.get('#submitBtn').click()
   cy.get('.btn-primary').click()

  // logout from checker

     cy.get(':nth-child(7) > .hvr-underline-from-center').click()
  
  // login with maker for create auction
  
  cy.get('#username').type('makerhardiksbi')
  cy.get('#password').type('Change@123')
  cy.get('#loginBtn').click()
  cy.get('#otp').click()
  cy.wait(10000)
  cy.get('#loginOtpBtn').click()

  cy.get(':nth-child(3) > .dropdown-toggle > div').click() // click on property
  cy.get('.open > .dropdown-menu > :nth-child(2) > .hvr-underline-from-center').click()
  cy.get('[tabindex="1"] > a').click()
  cy.wait(3000)

  // manage property

  cy.get('[tabindex="4"] > a').click()
  cy.get('[href="javascript:void(0);"]').click()
  cy.get('.btn-primary').click()

  // Create Auction Notice

  cy.get('#authorizedOfficerName').type('hardik mandaviya')
  cy.get('#contactDetails').type('1234567899')
  cy.get('#dateAndTimeFrom').type('21-07-2024 00:00')                     // Need to change
  cy.get('#dateAndTimeTo').type('22-07-2024 00:00')                       // Need to change
  cy.get('#startPaymentDate').type('23-07-2024 00:00', { force: true })   // Need to change
  cy.get('#lastPaymentDate').type('24-07-2024 00:00', { force: true })    // Need to change
  cy.get('#startDatetime').type('25-07-2024 00:00', { force: true })      // Need to change
  cy.get('#endDatetime').type('26-07-2024 00:00', { force: true })        // Need to change
  
  cy.get('#startPrice').type('50000')
  cy.get('#decrementPrice').type('60000')
  cy.get('#decrementPriceExtension').type('90000')
  cy.get('#extendedWhen').type('2')
  cy.get('#extendedBy').type('5')
  cy.get('#submitBtn').click()
  cy.get('.btn-primary').click()
   

  // Upload Document
  
  cy.get('#fileToUpload').selectFile('C:/Users/hardik.mandaviya/Desktop/Preface.pdf')
  cy.get('#description').type('doc uploaded')
  cy.get('#submitBtn').click()
  cy.get('[href="javascript:void(0);"]').click()

  // Remittance Account Details
  cy.get('#leiNo').type('57896521478569852364')
  cy.get('#submitBtn').click()

  // Send Auction for Approval

  cy.get('.col-sm-7 > #sentTo').select('79')
  cy.get('#remarks').type('Auction is send for approval')
  cy.get('#submitBtn').click()
  cy.get('.btn-primary').click()

  // logout form maker


    cy.get(':nth-child(7) > .hvr-underline-from-center').click()

  // login with checker
 
  cy.get('#username').type('checkerhardiksbi')
  cy.get('#password').type('Change@123')
  cy.get('#loginBtn').click()
  cy.get('#otp').click()
  cy.wait(10000)
  cy.get('#loginOtpBtn').click()

  cy.get(':nth-child(5) > .hvr-underline-from-center').click() // click on auction
  cy.get('[tabindex="0"] > a').click()  // click on pending
  cy.get('#btnLast').click()
  cy.wait(3000)

  // Manage Auction

  cy.get(':nth-child(4) > .text-left > .tablink > :nth-child(1) > a').click()

  // Review & Approve Auction

  cy.get('#action').select('1')
  cy.get('#remarks').type('auction is approved')
  cy.get('#confirmed').click()
  cy.get('#submitBtn').click()
  cy.get('.btn-primary').click()




  })
})

