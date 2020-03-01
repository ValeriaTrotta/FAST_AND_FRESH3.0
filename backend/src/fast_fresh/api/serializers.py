from rest_framework import serializers
from fast_fresh.models import Product, Provider, ProviderPhone, EmployeeStore, StoreBoss, Client, Member, Zona, City, State, Payment, Product_Type, Type_Of_Product, Batch, Store, Delivery, PickUp, Bill, BillDetails, Currency, ExchangeRate, CashRegister, CashRegisterBills, PaymentMethod, Employee, Job, IVA


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class BatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Batch
        fields = '__all__'


class Type_Of_ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type_Of_Product
        fields = '__all__'


class Product_TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_Type
        fields = '__all__'


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'


class ZonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zona
        fields = '__all__'


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'


class StateSerializer(serializers.ModelSerializer):
    class Meta:
        model = State
        fields = '__all__'


class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'


class StoreBossSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoreBoss
        fields = '__all__'


class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Delivery
        fields = '__all__'


class PickUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = PickUp
        fields = '__all__'


class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = '__all__'


class BillDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillDetails
        fields = '__all__'


class CashRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CashRegister
        fields = '__all__'


class CashRegisterBillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CashRegisterBills
        fields = '__all__'


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = '__all__'


class PaymentMethodSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentMethod
        fields = '__all__'


class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = '__all__'


class ExchangeRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExchangeRate
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


class EmployeeStoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeeStore
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = '__all__'


class IVASerializer(serializers.ModelSerializer):
    class Meta:
        model = IVA
        fields = '__all__'


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'


class ProviderPhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProviderPhone
        fields = '__all__'
