from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import (ProductViewSet,
                    BatchViewSet,
                    Type_Of_ProductViewSet,
                    Product_TypeViewSet,
                    ClientViewSet,
                    MemberViewSet,
                    ZonaViewSet,
                    CityViewSet,
                    StateViewSet,
                    StoreViewSet,
                    StoreBossViewSet,
                    DeliveryViewSet,
                    PickUpViewSet,
                    BillViewSet,
                    BillDetailsViewSet,
                    CashRegisterViewSet,
                    CashRegisterBillsViewSet,
                    PaymentViewSet,
                    PaymentMethodViewSet,
                    CurrencyViewSet,
                    ExchangeRateViewSet,
                    EmployeeViewSet,
                    EmployeeStoreViewSet,
                    JobViewSet,
                    IVAViewSet,
                    ProviderViewSet,
                    ProviderPhoneViewSet,)

router = DefaultRouter()
router.register(r'product', ProductViewSet, basename='product')
router.register(r'batch', BatchViewSet, basename='batch')
router.register(r'type_of_product', Type_Of_ProductViewSet,
                basename='type_of_product')
router.register(r'product_type', Product_TypeViewSet, basename='product_type')
router.register(r'client', ClientViewSet, basename='client')
router.register(r'member', MemberViewSet, basename='member')
router.register(r'zona', ZonaViewSet, basename='zona')
router.register(r'city', CityViewSet, basename='city')
router.register(r'state', StateViewSet, basename='state')
router.register(r'store', StoreViewSet, basename='store')
router.register(r'storeboss', StoreBossViewSet, basename='storeboss')
router.register(r'delivery', DeliveryViewSet, basename='delivery')
router.register(r'pickup', PickUpViewSet, basename='pickup')
router.register(r'bill', BillViewSet, basename='bill')
router.register(r'billdetails', BillDetailsViewSet, basename='billdetails')
router.register(r'cashregister', CashRegisterViewSet, basename='cashregister')
router.register(r'cashregisterbills', CashRegisterBillsViewSet,
                basename='cashregisterbills')
router.register(r'payment', PaymentViewSet, basename='payment')
router.register(r'paymentmethod', PaymentMethodViewSet,
                basename='paymentmethod')
router.register(r'currency', CurrencyViewSet, basename='currency')
router.register(r'exchangerate', ExchangeRateViewSet, basename='exchangerate')
router.register(r'employee', EmployeeViewSet, basename='employee')
router.register(r'employeestore', EmployeeStoreViewSet,
                basename='employeestore')
router.register(r'job', JobViewSet, basename='job')
router.register(r'iva', IVAViewSet, basename='iva')
router.register(r'provider', ProviderViewSet, basename='provider')
router.register(r'providerphone', ProviderPhoneViewSet,
                basename='providerphone')
urlpatterns = router.urls
