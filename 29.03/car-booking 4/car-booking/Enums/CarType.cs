
using System.ComponentModel.DataAnnotations;

namespace car_booking.Enums;

public enum CarType
{   [Display(Name="SUV")]
    SUV,
    [Display(Name="Minivan")]
    Minivan,
    [Display(Name="Sedan")]
    Sedan,
    [Display(Name="Coupe")]
    Coupe
}