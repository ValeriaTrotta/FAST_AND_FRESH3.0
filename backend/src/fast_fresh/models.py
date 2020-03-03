from django.db import models


class Product (models.Model):
    product_name = models.CharField(max_length=30, null=True)
    is_special = models.BooleanField()
    is_active = models.BooleanField()
    provider = models.ForeignKey(
        'Provider', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()

    def __str__(self):
        return self.product_name


class Batch (models.Model):
    product_name = models.ForeignKey(
        'Product', on_delete=models.CASCADE, null=False, blank=False)
    units = models.IntegerField()
    elaboration_date = models.DateField()
    expiration_date = models.DateField()
    price_dolars_u = models.FloatField()
    units_sold = models.IntegerField(default=0)
    units_lost = models.IntegerField(default=0)
    discount = models.FloatField(default=0)
    price_points = models.IntegerField(default=0)
    store = models.ForeignKey(
        'Store', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()


class Type_Of_Product (models.Model):
    type = models.CharField(max_length=50)
    is_active = models.BooleanField()

    def __str__(self):
        return self.type


class Product_Type (models.Model):
    product_name = models.ForeignKey(
        'Product', on_delete=models.CASCADE, null=False, blank=False)
    type_of_product = models.ForeignKey(
        'Type_Of_Product', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()


class Client (models.Model):
    GENDER = ('F', ('Femenine')), ('M', ('Masculine'))
    client_name = models.CharField(max_length=100)
    client_last_name = models.CharField(max_length=100)
    client_cedula = models.IntegerField(null=True, unique=True)
    client_phone = models.CharField(max_length=11)
    client_gender = models.CharField(
        max_length=1, choices=GENDER, blank=False, null=False)
    zona = models.ForeignKey(
        'Zona', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()

    def __str__(self):
        return self.client_name


class Member (models.Model):

    member_points = models.IntegerField(default=0)
    member_email = models.EmailField()
    member_start_date = models.DateField(auto_now_add=True)
    member_pay_date = models.DateField()
    client = models.OneToOneField(
        'Client', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()
    member_birth_date = models.DateField()


class Zona (models.Model):
    zona_name = models.CharField(max_length=30)
    city = models.ForeignKey(
        'City', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()

    def __str__(self):
        return self.zona_name


class City (models.Model):
    city_name = models.CharField(max_length=30)
    state = models.ForeignKey(
        'State', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()

    def __str__(self):
        return self.city_name


class State (models.Model):
    state_name = models.CharField(max_length=30)
    is_active = models.BooleanField()

    def __str__(self):
        return self.state_name


class Store (models.Model):
    store_name = models.CharField(max_length=30, null=True)
    zona = models.ForeignKey(
        'Zona', on_delete=models.CASCADE, null=False, blank=False)
    open_time = models.TimeField()
    closing_time = models.TimeField()
    store_phone = models.IntegerField(unique=True)
    is_active = models.BooleanField()

    def __str__(self):
        return self.store_name


class StoreBoss(models.Model):
    store = models.OneToOneField(
        'Store', on_delete=models.CASCADE, null=False, blank=False)
    boss = models.OneToOneField(
        'Employee', on_delete=models.CASCADE, null=False, blank=False)
    start_date = models.DateField()
    is_active = models.BooleanField()


class Delivery (models.Model):
    STATUS = ('Entregado', ('Entregado')), ('No Entregado', ('No Entregado'))
    delivery_price = models.FloatField()
    employee = models.ForeignKey(
        'Employee', on_delete=models.CASCADE, null=False, blank=False)
    bill_id = models.ForeignKey(
        'Bill', on_delete=models.CASCADE, null=False, blank=False)
    delivery_status = models.CharField(
        max_length=15, choices=STATUS, blank=False, null=False)
    zona = models.ForeignKey(
        'Zona', on_delete=models.CASCADE, null=False, blank=False)
    address = models.CharField(max_length=200)
    is_active = models.BooleanField()


class PickUp (models.Model):
    STATUS = ('Entregado', ('Entregado')), ('No Entregado', ('No Entregado'))
    pickup_status = models.CharField(
        max_length=15, choices=STATUS, blank=False, null=False)
    bill_id = models.ForeignKey(
        'Bill', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()


class Bill (models.Model):
    client_id = models.ForeignKey(
        'Client', on_delete=models.CASCADE, null=False, blank=False)
    bill_sub_total = models.FloatField()
    bill_iva = models.ForeignKey(
        'IVA', on_delete=models.CASCADE, null=False, blank=False, default=None)
    bill_date = models.DateField(auto_now_add=True)
    bill_time = models.TimeField(auto_now_add=True)
    bill_earned_points = models.IntegerField()
    bill_delivery = models.BooleanField()
    bill_pickup = models.BooleanField()
    is_active = models.BooleanField()


class BillDetails (models.Model):
    bill_id = models.ForeignKey(
        'Bill', on_delete=models.CASCADE, null=False, blank=False)
    product_batch_id = models.ForeignKey(
        'Batch', on_delete=models.CASCADE, null=False, blank=False)
    product_quantity = models.IntegerField()
    is_active = models.BooleanField()


class CashRegister (models.Model):
    employee_id = models.ForeignKey(
        'Employee', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()


class CashRegisterBills(models.Model):
    cash_register = models.ForeignKey(
        'CashRegister', on_delete=models.CASCADE, null=False, blank=False)
    bill = models.ForeignKey(
        'Bill', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()


class Payment(models.Model):
    payment_amount = models.FloatField()
    payment_method = models.ForeignKey(
        'PaymentMethod', on_delete=models.CASCADE, null=False, blank=False)
    payment_method_instrument = models.IntegerField(null=True)
    bill = models.ForeignKey(
        'Bill', on_delete=models.CASCADE, null=False, blank=False)
    is_active = models.BooleanField()


class PaymentMethod (models.Model):
    payment_method = models.CharField(max_length=20)
    is_active = models.BooleanField


class Currency (models.Model):
    currency_name = models.CharField(max_length=30)
    is_active = models.BooleanField()

    def __str__(self):
        return self.currency_name


class ExchangeRate (models.Model):
    origin_currency = models.ForeignKey(
        'Currency', on_delete=models.CASCADE, null=False, blank=False)
    exchange_rate = models.FloatField()
    exchange_rate_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField


class Employee (models.Model):
    GENDER = ('F', ('Femenine')), ('M', ('Masculine'))
    employee_name = models.CharField(max_length=30)
    employee_last_name = models.CharField(max_length=30)
    employee_cedula = models.IntegerField(unique=True)
    employee_gender = models.CharField(
        max_length=1, choices=GENDER, blank=False, null=False)
    employee_birth_date = models.DateField()
    employee_phone = models.IntegerField()
    employee_job = models.ForeignKey(
        'Job', on_delete=models.CASCADE, null=False, blank=False)
    salary_bonus = models.IntegerField()
    employee_email = models.EmailField()
    is_active = models.BooleanField()

    def __str__(self):
        return (self.employee_name + self.employee_last_name)


class EmployeeStore(models.Model):
    employee_store = models.ForeignKey(
        'Store', on_delete=models.CASCADE, null=False, blank=False)
    employee = models.ForeignKey(
        'Employee', on_delete=models.CASCADE, null=False, blank=False)
    hired_date = models.DateField(editable=False)
    is_active = models.BooleanField()


class Job(models.Model):
    job_name = models.CharField(max_length=30)
    job_salary = models.FloatField()
    is_active = models.BooleanField()

    def __str__(self):
        return self.job_name


class IVA(models.Model):
    iva_porcentaje = models.FloatField()
    iva_date = models.DateField(auto_now_add=True)
    is_active = models.BooleanField()


class Provider(models.Model):
    provider_name = models.CharField(max_length=30)
    provider_email = models.EmailField(unique=True)
    provider_address = models.CharField(max_length=150)
    is_active = models.BooleanField()

    def __str__(self):
        return self.provider_name


class ProviderPhone(models.Model):
    provider = models.ForeignKey(
        'Provider', on_delete=models.CASCADE, null=False, blank=False)
    provider_phone_number = models.IntegerField()
    is_active = models.BooleanField()
