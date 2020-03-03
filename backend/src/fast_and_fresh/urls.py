
from django.contrib import admin
from django.urls import path, include
from fast_fresh.api.views import get_queryset

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('fast_fresh.api.urls')),
    path('query1/', get_queryset)
]
