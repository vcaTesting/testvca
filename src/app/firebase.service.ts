
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
interface DataRef {
  id?: String;
  trackableImageUrl: String,
  projectName: String,
  flatType: String,
  projectStartFrom: Number,
  projectEndsAt: Number,
  projectId?: Number,
  ProjectLocation: String,
  description?: String,
}
interface customer {
  id?: String,
  name: String,
  address: String,
  phone: Number
}
interface PaymentofCustomer {
  selectedId?: String,
  id?: String,
  date: String,
  name: String,
  cash: String,
  cheque: String,
  Chequeno: String,
}
interface wholesaler {
  id?: String,
  name: String,
  address: String,
  number: String,
}
interface orderOfwholsaler {
  selectedId?: string,
  id?: String,
  date: String,
  name: String,
  pname: String,
  Quantity: String,
  Weight: String,
  Rate: String,
  total: String,
  Paid: String,
  Balance: String,
  file: String,
}
interface productBal {
  selectedId?: string
  id?: string,
  date: String,
  p1: String,
  t1: String,
  b1: String,
  s1: String,
  p2: String,
  t2: String,
  b2: String,
  s2: String,
  p3: String,
  t3: String,
  b3: String,
  s3: String,
  p4: String,
  t4: String,
  b4: String,
  s4: String,
  p5: String,
  t5: String,
  b5: String,
  s5: String,
  p6: String,
  t6: String,
  b6: String,
  s6: String,
  p7: String,
  t7: String,
  b7: String,
  s7: String,
  p8: String,
  t8: String,
  b8: String,
  s8: String,
  p9: String,
  t9: String,
  b9: String,
  s9: String,
  p10: String,
  t10: String,
  b10: String,
  s10: String,
  p11: String,
  t11: String,
  b11: String,
  s11: String,
  p12: String,
  t12: String,
  b12: String,
  s12: String,
  p13: String,
  t13: String,
  b13: String,
  s13: String,
}
interface wholsalerPay {
  id?: String,
  selectedId?: string,
  date: String,
  name: String,
  cash: String,
  cheque: String,
  Chequeno: String,
}
interface DailyRate {
  id?: String,
  date: String,
  wing: String,
  wfr: String,
  wmr: String,
  wpr: String,
  wprp: String,
  bonelees: String,
  bfr: String,
  bmr: String,
  bpr: String,
  bprp: String,
  legbonelees: String,
  lfr: String,
  lmr: String,
  lpr: String,
  lprp: String,
  boiler: String,
  boilerfr: String,
  boilermr: String,
  boilerpr: String,
  boilerprp: String,
  coldress: String,
  cfr: String,
  cmr: String,
  cpr: String,
  cprp: String,
  tanduri: String,
  tfr: String,
  tmr: String,
  tpr: String,
  tprp: String,
  currycut: String,
  curryfr: String,
  currymr: String,
  currypr: String,
  curryprp: String,
  cutpeace: String,
  cutfr: String,
  cutmr: String,
  cutpr: String,
  cutprp: String,
  leaver: String,
  leaverFixRate: String,
  leavermr: String,
  leaverpr: String,
  leaverprp: String,
  skin: String,
  skinfr: String,
  skinmr: String,
  skinpr: String,
  skinprp: String,
  spclleg: String,
  splfr: String,
  splmr: String,
  splpr: String,
  splprp: String,
  livebird: String,
  lbfr: String,
  lbmr: String,
  lbpr: String,
  lbprp: String,
  egg: String,
  eggfr: String,
  eggmr: String,
  eggpr: String,
  eggprp: String,
  gavran: String,
  gfr: String,
  gmr: String,
  gpr: String,
  gprp: String,
}
interface CustomerOrder {
  selectId?: String
  id?: String,
  date: String,
  name: String,
  productname: String,
  Qantity: String,
  Rate: String,
  Weight: String,
  total: String,
  paid: String,
  Balance: String,
  productname1: String,
  Qantity1: String,
  Rate1: String,
  Weight1: String,
  total1: String,
  paid1: String,
  Balance1: String,
  productname2: String,
  Qantity2: String,
  Rate2: String,
  Weight2: String,
  total2: String,
  paid2: String,
  Balance2: String,
  productname3: String,
  Qantity3: String,
  Rate3: String,
  Weight3: String,
  total3: String,
  paid3: String,
  Balance3: String,
  productname4: String,
  Qantity4: String,
  Rate4: String,
  Weight4: String,
  total4: String,
  paid4: String,
  Balance4: String,
  productname5: String,
  Qantity5: String,
  Rate5: String,
  Weight5: String,
  total5: String,
  paid5: String,
  Balance5: String,
  productname6: String,
  Qantity6: String,
  Rate6: String,
  Weight6: String,
  total6: String,
  paid6: String,
  Balance6: String,
  productname7: String,
  Qantity7: String,
  Rate7: String,
  Weight7: String,
  total7: String,
  paid7: String,
  Balance7: String,
  productname8: String,
  Qantity8: String,
  Rate8: String,
  Weight8: String,
  total8: String,
  paid8: String,
  Balance8: String,
  productname9: String,
  Qantity9: String,
  Rate9: String,
  Weight9: String,
  total9: String,
  paid9: String,
  Balance9: String,
  productname10: String,
  Qantity10: String,
  Rate10: String,
  Weight10: String,
  total10: String,
  paid10: String,
  Balance10: String,
  productname11: String,
  Qantity11: String,
  Rate11: String,
  Weight11: String,
  total11: String,
  paid11: String,
  Balance11: String,
  productname12: String,
  Qantity12: String,
  Rate12: String,
  Weight12: String,
  total12: String,
  paid12: String,
  Balance12: String,
  productname13: String,
  Qantity13: String,
  Rate13: String,
  Weight13: String,
  total13: String,
  paid13: String,
  Balance13: String,
  productname14: String,
  Qantity14: String,
  Rate14: String,
  Weight14: String,
  total14: String,
  paid14: String,
  Balance14: String,
}

interface TotalofCustomer {
  id: string
  name: string,
  total: string,
  paid: string,
  balance: string,
}
interface test1 {
  id?: string,
  name: string,
  address: string,
  phone: string,
}
interface test2 {
  id?: string,
  name: string,
  address: string,
  phone: string,
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  [x: string]: any;
  //Customer Add in List
  customerData: AngularFirestoreCollection<customer>; //set
  leads: Observable<customer[]>; //get
  leadDoc!: AngularFirestoreDocument<customer>; //delte

  //wholsaler add in list
  wholsalerData: AngularFirestoreCollection<wholesaler>;//set
  wholsalerDetail: Observable<wholesaler[]>; //get
  deletewholsaler!: AngularFirestoreDocument<customer>; //delte

  //customer payment add in list
  customersPayment: AngularFirestoreCollection<PaymentofCustomer>; //set  
  paymentofcust: Observable<PaymentofCustomer[]>; //get

  //wholsaler order save
  updatewholsalerOrder: AngularFirestoreCollection<orderOfwholsaler>; //set  
  getwholsalerOrder: Observable<orderOfwholsaler[]>; //get

  //product Balance
  productBalance: AngularFirestoreCollection<productBal>; //set  
  showProductBalnce: Observable<productBal[]>; //get

  //payment of Wholsaler
  wholesalersPayment: AngularFirestoreCollection<wholsalerPay>; //set  
  paymentofwholesaler: Observable<wholsalerPay[]>; //get

  //Daily Rate
  setDailyRate: AngularFirestoreCollection<DailyRate>; //set  
  getDailyRate: Observable<DailyRate[]>; //get

  //Customer order
  setcutsomerOrder: AngularFirestoreCollection<CustomerOrder>; //set  
  getcutsomerOrder: Observable<CustomerOrder[]>; //get
  customerByID!: AngularFirestoreDocument<customer>; //delte

  // getcutsomerOrderById : AngularFirestoreDocument<CustomerOrder>;

  //Test1
  setTest1: AngularFirestoreCollection<test1>; //set  
  getTest1: Observable<test1[]>; //get
  //Test2
  setTest2: AngularFirestoreCollection<test2>; //set  
  getTest2: Observable<test2[]>; //get
  //UpdateCustomeTotal
  setTotalBalanceCust: AngularFirestoreCollection<TotalofCustomer>; //set  
  getTotalBalanceCust: Observable<TotalofCustomer[]>; //get

  constructor(public fireStre: AngularFirestore) {
    this.customerData = this.fireStre.collection('Customer', ref => ref.orderBy('name'));
    this.leads = this.customerData.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as customer;
        data.id = a.payload.doc.id;
        return data;
      })
    }));

    this.customersPayment = this.fireStre.collection('customePayment', ref => ref.orderBy('name'));
    this.paymentofcust = this.customersPayment.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as PaymentofCustomer;
        data.id = a.payload.doc.id;
        return data;
      })
    }));

    this.wholsalerData = this.fireStre.collection('wholsalerList', ref => ref.orderBy('name'));
    this.wholsalerDetail = this.wholsalerData.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as wholesaler;
        data.id = a.payload.doc.id;
        return data;
      })
    }));

    this.updatewholsalerOrder = this.fireStre.collection('orderOfWholsaler', ref => ref.orderBy('date'));
    this.getwholsalerOrder = this.updatewholsalerOrder.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as orderOfwholsaler;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.productBalance = this.fireStre.collection('productBalnce', ref => ref.orderBy('date'));
    this.showProductBalnce = this.productBalance.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as productBal;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.wholesalersPayment = this.fireStre.collection('Wholesaler Payment', ref => ref.orderBy('date'));
    this.paymentofwholesaler = this.wholesalersPayment.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as wholsalerPay;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.setDailyRate = this.fireStre.collection('Daily Rate', ref => ref.orderBy('date'));
    this.getDailyRate = this.setDailyRate.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as DailyRate;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.setcutsomerOrder = this.fireStre.collection('Customer Order', ref => ref.orderBy('name'));
    this.getcutsomerOrder = this.setcutsomerOrder.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CustomerOrder;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.setTest1 = this.fireStre.collection('Test1', ref => ref.orderBy('name'));
    this.getTest1 = this.setTest1.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as test1;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.setTest2 = this.fireStre.collection('Test2', ref => ref.orderBy('name'));
    this.getTest2 = this.setTest2.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as test2;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
    this.setTotalBalanceCust = this.fireStre.collection('Total Balnace of Customer', ref => ref.orderBy('name'));
    this.getTotalBalanceCust = this.setTotalBalanceCust.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as TotalofCustomer;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }
  //customer

  getCustomer() {
    return this.leads;
  }
  addCustomer(data: any) {
    return this.customerData.add(data);
  }

  //customer Payment
  saveCustomerPay(data: PaymentofCustomer) {
    return this.customersPayment.add(data)
  }
  getCustomerPayment() {
    return this.paymentofcust
  }

  //wholsaler name save
  savewholesaler(data: wholesaler) {
    return this.wholsalerData.add(data)
  }
  getwholsaler() {
    return this.wholsalerDetail
  }

  //order of wholsaler
  setWholesaler(data: orderOfwholsaler) {
    return this.updatewholsalerOrder.add(data)
  }
  getOrderofWholsaler() {
    return this.getwholsalerOrder
  }
  // getOrderById(data:any){
  //   this.getcutsomerOrderById = this.fireStre.doc(`CustomerOrder/${data.id}`);

  // }
  // //product Bal
  saveProducBal(data: productBal) {
    return this.productBalance.add(data)
  }
  getProductBalance() {
    return this.showProductBalnce
  }
  setWholsalerpayment(data: wholsalerPay) {
    return this.wholesalersPayment.add(data)
  }
  getWholsalerpayment() {
    return this.paymentofwholesaler
  }

  //daly rate
  setTodayRate(data: DailyRate) {
    return this.setDailyRate.add(data)
  }
  getTodayRate() {
    return this.getDailyRate
  }
  //customer order Detail
  saveCustomerOrder(data: CustomerOrder) {
    return this.setcutsomerOrder.add(data)
  }
  showCustomerOrder() {
    return this.getcutsomerOrder
  }
  //tset
  savetest(data: test1) {
    return this.setTest1.add(data)
  }
  showtest() {
    return this.getTest1
  }
  //tset2
  savetest1(data: test2) {
    return this.setTest2.add(data)
  }
  showtest1() {
    return this.getTest2
  }
  setCustomerTotal(data: TotalofCustomer){
    return this.setTotalBalanceCust.add(data)
  }
  getCustomeBalance(){
    return this.getTotalBalanceCust

  }
  //payment of wholsaler

  // delete
  // deleteItem(data: any) {
  //   this.itemDoc = this.fireStre.doc(`properties/${data.id}`);
  //   this.itemDoc.delete();
  // }
  deleteCustomer(data: any) {
    this.leadDoc = this.fireStre.doc(`Customer/${data.id}`);
    this.leadDoc.delete();
  }

  deleteWholsaler(data: any) {
    this.deletewholsaler = this.fireStre.doc(`wholsalerList/${data.id}`);
    this.deletewholsaler.delete();
  }



 
}
