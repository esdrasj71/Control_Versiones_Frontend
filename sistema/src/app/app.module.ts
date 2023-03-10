import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { BrandHomeComponent } from './components/brand/brand-home/brand-home.component';
import { BrandFormComponent } from './components/brand/brand-form/brand-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe, SortByPipe } from '../pipes';
import { ProvidersHomeComponent } from './components/providers/providers-home/providers-home.component';
import { ProvidersFormComponent } from './components/providers/providers-form/providers-form.component';
import { ProductHomeComponent } from './components/product/product-home/product-home.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { LotHomeComponent } from './components/lot/lot-home/lot-home.component';
import { LotFormComponent } from './components/lot/lot-form/lot-form.component';
import { ProductCategoryHomeComponent } from './components/product_category/product-category-home/product-category-home.component';
import { ProductCategoryFormComponent } from './components/product_category/product-category-form/product-category-form.component';
import { PurchaseHeaderFormComponent } from './components/purchase/purchase-header-form/purchase-header-form.component';
import { FiltradoproviderPipe } from './pipes/filtradoprovider.pipe';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeHomeComponent } from './components/employee/employee-home/employee-home.component';
import { BillHeaderFormComponent } from './components/sales/bill-header-form/bill-header-form.component';
import { InventoryHomeComponent } from './components/inventory/inventory-home/inventory-home.component';
import { InventoryFormComponent } from './components/inventory/inventory-form/inventory-form.component';
import { FitradoproductPipe } from './pipes/fitradoproduct.pipe';
import { EmployeePositionHomeComponent } from './components/employee_position/employee-position-home/employee-position-home.component';
import { EmployeePositionFormComponent } from './components/employee_position/employee-position-form/employee-position-form.component';
import { FiltradocustomersPipe } from './pipes/filtradocustomers.pipe';
import { FiltradopresentationPipe } from './pipes/filtradopresentation.pipe';
import { CustomersHomeComponent } from './components/customers/customers-home/customers-home.component';
import { CustomersFormComponent } from './components/customers/customers-form/customers-form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { PaymentHomeComponent } from './components/payment/payment-home/payment-home.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { PaymentTypeComponent } from './components/payment_type_detail/payment-type-home/payment-type.component';
import { PaymentTypeFormComponent } from './components/payment_type_detail/payment-type-form/payment-type-form.component';
import { PaymentPurchaseHomeComponent } from './components/payment_purchase/payment-purchase-home/payment-purchase-home.component';
import { PaymentPurchaseFormComponent } from './components/payment_purchase/payment-purchase-form/payment-purchase-form.component';
import { PaymentDetailHomeComponent } from './components/payment_detail_purchase/payment-detail-home/payment-detail-home.component';
import { PaymentDetailFormComponent } from './components/payment_detail_purchase/payment-detail-form/payment-detail-form.component';
import { FiltradoEmpleadosPipe } from './pipes/filtrado-empleados.pipe';
import { FilterEmployeePosPipe } from './pipes/filter-employee-pos.pipe';
import { FilterProvidersPipe } from './pipes/filter-providers.pipe';
import { FilterBrandPipe } from './pipes/filter-brand.pipe';
import { FilterProductCatPipe } from './pipes/filter-product-cat.pipe';
import { FilterLotPipe } from './pipes/filter-lot.pipe';
import { FiltradoinventoryPipe } from './pipes/filtradoinventory.pipe';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { CheckloginGuard } from './guards/checklogin.guard';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { AccountsReceivableComponent } from './components/accounts_receivable/accounts-receivable/accounts-receivable.component';
import { HomeComponent } from './components/home/home.component';
import { DebsToPayHomeComponent } from './components/debs_to_pay/debs-to-pay-home/debs-to-pay-home.component';
import { Report2Component } from './components/report_Sales/report2/report2.component';
import { Report3Component } from './components/report_Sales/report3/report3.component';
import { Report1Component } from './components/report_Sales/report1/report1.component';
import { PurchaseReportsHomeComponent } from './components/purchase_reports/purchase-reports-home/purchase-reports-home.component';
import { DebsPayHomeComponent } from './components/purchase_reports/debs-pay-home/debs-pay-home.component';
import { InventoryReportsHomeComponent } from './components/inventory_reports/inventory-reports-home/inventory-reports-home.component';

import { IncomesFormComponent } from './components/incomes/incomes-form/incomes-form.component';
import { ExpensesHomeComponent } from './components/expenses/expenses-home/expenses-home.component';
import { ExpensesFormComponent } from './components/expenses/expenses-form/expenses-form.component';
import { CostsHomeComponent } from './components/costs/costs-home/costs-home.component';
import { CostsFormComponent } from './components/costs/costs-form/costs-form.component';
import { BillTypeHomeComponent } from './components/bill-type/bill-type-home/bill-type-home.component';
import { BillTypeFormComponent } from './components/bill-type/bill-type-form/bill-type-form.component';
import { BankHomeComponent } from './components/bank/bank-home/bank-home.component';
import { BankFormComponent } from './components/bank/bank-form/bank-form.component';
import { CompanyFormComponent } from './components/home/company-form/company-form.component';
import { ExpendituresHomeComponent } from './components/expenditures/expenditures-home/expenditures-home.component';
import { ExpendituresFormComponent } from './components/expenditures/expenditures-form/expenditures-form.component';
import { FilterExpensePipe } from './pipes/filter-expense.pipe';
import { FilterCostPipe } from './pipes/filter-cost.pipe';
import { FilterBillTypePipe } from './pipes/filter-bill-type.pipe';
import { FilterBankPipe } from './pipes/filter-bank.pipe';
import { FilterExpendituresPipe } from './pipes/filter-expenditures.pipe';
import { ResultStatementHomeComponent } from './components/result_statement/result-statement-home/result-statement-home.component';
import { SeriesFormComponent } from './components/series/series-form/series-form.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import {BalanceSheetComponent} from './components/balance_sheets/balance-sheet/balance-sheet.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { FiltradouserPipe } from './pipes/filtradouser.pipe'





const routes: Route[] = [
  //Brand
  { path: 'brand-form', component: BrandFormComponent, canActivate: [CheckloginGuard] },
  { path: 'brand-home', component: BrandHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'brand-form/:id', component: BrandFormComponent, canActivate: [CheckloginGuard] },
  //Provider
  { path: 'providers-home', component: ProvidersHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'providers-form', component: ProvidersFormComponent, canActivate: [CheckloginGuard] },
  { path: 'providers-form/:id', component: ProvidersFormComponent, canActivate: [CheckloginGuard] },
  //Product
  { path: 'product-home', component: ProductHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'product-form', component: ProductFormComponent, canActivate: [CheckloginGuard] },
  { path: 'product-form/:id', component: ProductFormComponent, canActivate: [CheckloginGuard] },
  //Product Category
  { path: 'product-category-home', component: ProductCategoryHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'product-category-form', component: ProductCategoryFormComponent, canActivate: [CheckloginGuard] },
  { path: 'product-category-form/:id', component: ProductCategoryFormComponent, canActivate: [CheckloginGuard] },
  //Lot
  { path: 'lot-home', component: LotHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'lot-form/:id', component: LotFormComponent, canActivate: [CheckloginGuard] },
  { path: 'lot-form', component: LotFormComponent, canActivate: [CheckloginGuard] },
  //Purchase Header
  { path: 'purchase_header-form', component: PurchaseHeaderFormComponent, canActivate: [CheckloginGuard] },
  { path: 'product-form', component: ProductFormComponent, canActivate: [CheckloginGuard] },
  //Bill Header
  { path: 'bill-header-form', component: BillHeaderFormComponent, canActivate: [CheckloginGuard] },
  //Inventory
  { path: 'inventory-home', component: InventoryHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'inventory-form', component: InventoryFormComponent, canActivate: [CheckloginGuard] },
  { path: 'inventory-form/:id', component: InventoryFormComponent, canActivate: [CheckloginGuard] },
  //Employee
  { path: 'employee-home', component: EmployeeHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'employee-form', component: EmployeeFormComponent, canActivate: [CheckloginGuard] },
  { path: 'employee-form/:id', component: EmployeeFormComponent, canActivate: [CheckloginGuard] },
  //Employee Position
  { path: 'employee-position-home', component: EmployeePositionHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'employee-position-form', component: EmployeePositionFormComponent, canActivate: [CheckloginGuard] },
  { path: 'employee-position-form/:id', component: EmployeePositionFormComponent, canActivate: [CheckloginGuard] },
  //Customers
  { path: 'customers-home', component: CustomersHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'customers-form', component: CustomersFormComponent, canActivate: [CheckloginGuard] },
  { path: 'customers-form/:id', component: CustomersFormComponent, canActivate: [CheckloginGuard] },
  //Payment
  { path: 'payment-home', component: PaymentHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-form', component: PaymentFormComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-form/:id', component: PaymentFormComponent, canActivate: [CheckloginGuard] },
  //Payment type detail
  { path: 'payment-type-home', component: PaymentTypeComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-type-form', component: PaymentTypeFormComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-type-form/:id', component: PaymentTypeFormComponent, canActivate: [CheckloginGuard] },
  //Payment purchase
  { path: 'payment-purchase-home', component: PaymentPurchaseHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-purchase-form', component: PaymentPurchaseFormComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-purchase-form/:id', component: PaymentPurchaseFormComponent, canActivate: [CheckloginGuard] },
  //Payment Detail Purchase
  { path: 'payment-detail-purchase-home', component: PaymentDetailHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-detail-purchase-form', component: PaymentDetailFormComponent, canActivate: [CheckloginGuard] },
  { path: 'payment-detail-purchase-form/:id', component: PaymentDetailFormComponent, canActivate: [CheckloginGuard] },
  //Login
  { path: 'login', component: LoginFormComponent },
  //user
  { path: 'user-home', component: UserHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'user', component: UserFormComponent, canActivate: [CheckloginGuard] },
  { path: 'user/:id', component: UserFormComponent, canActivate: [CheckloginGuard] },
  //Company
  { path: 'company/:id', component: CompanyFormComponent, canActivate: [CheckloginGuard] },
  //accounts receivable
  { path: 'accounts-receivable', component: AccountsReceivableComponent, canActivate: [CheckloginGuard] },
  { path: 'home', component: HomeComponent, canActivate: [CheckloginGuard] },
  //Debs to Pay
  { path: 'debs-to-pay-home', component: DebsToPayHomeComponent, canActivate: [CheckloginGuard] },
  //reportes sales
  { path: 'report2', component: Report2Component, canActivate: [CheckloginGuard] },
  { path: 'report3', component: Report3Component, canActivate: [CheckloginGuard] },
  { path: 'report1', component: Report1Component, canActivate: [CheckloginGuard] },
  //Purchase Reports
  { path: 'purchase-reports-home', component: PurchaseReportsHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'debs-pay-home', component: DebsPayHomeComponent, canActivate: [CheckloginGuard] },
  //Inventory Reports
  { path: 'inventory-reports-home', component: InventoryReportsHomeComponent, canActivate: [CheckloginGuard] },
  //incomes
  { path: 'incomes', component: IncomesFormComponent, canActivate: [CheckloginGuard] },
  { path: 'report2', component: Report2Component, canActivate: [CheckloginGuard] },
  { path: 'report3', component: Report3Component, canActivate: [CheckloginGuard] },
  { path: 'report1', component: Report1Component, canActivate: [CheckloginGuard] },
  //Purchase Reports
  { path: 'purchase-reports-home', component: PurchaseReportsHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'debs-pay-home', component: DebsPayHomeComponent, canActivate: [CheckloginGuard] },
  //Inventory Reports
  { path: 'inventory-reports-home', component: InventoryReportsHomeComponent, canActivate: [CheckloginGuard] },
  //Expenses
  { path: 'expenses-form', component: ExpensesFormComponent, canActivate: [CheckloginGuard] },
  { path: 'expenses-home', component: ExpensesHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'expenses-form/:id', component: ExpensesFormComponent, canActivate: [CheckloginGuard] },
  //Costs
  { path: 'costs-form', component: CostsFormComponent, canActivate: [CheckloginGuard] },
  { path: 'costs-home', component: CostsHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'costs-form/:id', component: CostsFormComponent, canActivate: [CheckloginGuard] },
  //Bill Type
  { path: 'billtype-form', component: BillTypeFormComponent, canActivate: [CheckloginGuard] },
  { path: 'billtype-home', component: BillTypeHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'billtype-form/:id', component: BillTypeFormComponent, canActivate: [CheckloginGuard] },
  //Bank
  { path: 'bank-form', component: BankFormComponent, canActivate: [CheckloginGuard] },
  { path: 'bank-home', component: BankHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'bank-form/:id', component: BankFormComponent, canActivate: [CheckloginGuard] },
  //Expenditures
  { path: 'expenditures-form', component: ExpendituresFormComponent, canActivate: [CheckloginGuard] },
  { path: 'expenditures-home', component: ExpendituresHomeComponent, canActivate: [CheckloginGuard] },
  { path: 'expenditures-form/:id', component: ExpendituresFormComponent, canActivate: [CheckloginGuard] },
  //Result Statement
  {path: 'resultstatement-home', component: ResultStatementHomeComponent, canActivate: [CheckloginGuard]},

  //series
  {path: 'serie-form', component:SeriesFormComponent, canActivate:[CheckloginGuard]},
 
  //Balance general
  {path: 'balance-sheet', component:BalanceSheetComponent, canActivate:[CheckloginGuard]},
  
];

@NgModule({
  declarations: [
    AppComponent,
    BrandHomeComponent,
    BrandFormComponent,
    FilterPipe,
    SortByPipe,
    ProvidersHomeComponent,
    ProvidersFormComponent,
    ProductHomeComponent,
    ProductFormComponent,
    LotHomeComponent,
    LotFormComponent,
    ProductCategoryHomeComponent,
    ProductCategoryFormComponent,
    LotHomeComponent,
    LotFormComponent,
    PurchaseHeaderFormComponent,
    FiltradoproviderPipe,
    BillHeaderFormComponent,
    EmployeeHomeComponent,
    EmployeeFormComponent,
    InventoryHomeComponent,
    InventoryFormComponent,
    FitradoproductPipe,
    EmployeePositionHomeComponent,
    EmployeePositionFormComponent,
    FiltradocustomersPipe,
    FiltradopresentationPipe,
    CustomersHomeComponent,
    CustomersFormComponent,
    PaymentHomeComponent,
    PaymentFormComponent,
    PaymentTypeComponent,
    PaymentTypeFormComponent,
    PaymentPurchaseHomeComponent,
    PaymentPurchaseFormComponent,
    PaymentDetailHomeComponent,
    PaymentDetailFormComponent,
    FiltradoEmpleadosPipe,
    FilterEmployeePosPipe,
    FilterProvidersPipe,
    FilterBrandPipe,
    FilterProductCatPipe,
    FilterLotPipe,
    FiltradoinventoryPipe,
    AccountsReceivableComponent,
    HomeComponent,
    LoginFormComponent,
    DebsToPayHomeComponent,
    UserFormComponent,
    Report2Component,
    Report3Component,
    Report1Component,
    PurchaseReportsHomeComponent,
    DebsPayHomeComponent,
    InventoryReportsHomeComponent,
    IncomesFormComponent,
    ExpensesHomeComponent,
    ExpensesFormComponent,
    CostsHomeComponent,
    CostsFormComponent,
    BillTypeHomeComponent,
    BillTypeFormComponent,
    BankHomeComponent,
    BankFormComponent,
    CompanyFormComponent,
    ExpendituresHomeComponent,
    ExpendituresFormComponent,
    FilterExpensePipe,
    FilterCostPipe,
    FilterBillTypePipe,
    FilterBankPipe,
    FilterExpendituresPipe,
    ResultStatementHomeComponent,
    SeriesFormComponent,
    FilterProductPipe,
    BalanceSheetComponent,
    UserHomeComponent,
    FiltradouserPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
