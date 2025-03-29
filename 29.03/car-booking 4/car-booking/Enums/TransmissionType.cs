using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace car_booking.Enums;

public enum TransmissionType
{
    [Display(Name = "Manual")]
    Manual,
    [Display(Name = "Automatic")]
    Automatic,
}