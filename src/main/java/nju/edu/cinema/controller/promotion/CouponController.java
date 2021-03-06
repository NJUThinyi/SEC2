package nju.edu.cinema.controller.promotion;

import nju.edu.cinema.bl.promotion.CouponService;
import nju.edu.cinema.vo.ResponseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by liying on 2019/4/16.
 */
@RestController
@RequestMapping("/coupon")
public class CouponController {

    @Autowired
    CouponService couponService;

    @GetMapping("{userId}/get")
    public ResponseVO getCoupons(@PathVariable int userId){
        return couponService.getCouponsByUser(userId);
    }
    @GetMapping("searchAllCoupons")
    public ResponseVO searchAllCoupons() {
    	return couponService.getAllCoupons();
    }
    @PostMapping("issue")
    public ResponseVO issueCoupon(@RequestParam int couponId,@RequestParam int userId) {
    	return couponService.issueCoupon(couponId, userId);
    }

}
