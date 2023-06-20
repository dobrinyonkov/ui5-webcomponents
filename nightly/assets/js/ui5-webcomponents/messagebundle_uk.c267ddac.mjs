const E = "\u0412\u043C\u0456\u0441\u0442 \u043A\u0430\u0440\u0442\u043A\u0438", _ = "\u041A\u0430\u0440\u0442\u043A\u0430", T = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043A\u0430\u0440\u0442\u043A\u0438", A = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0456\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438", I = "\u0410\u0432\u0430\u0442\u0430\u0440", R = "{0} \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043E, {1} \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u043E.", O = "\u0410\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043B\u044F \u0432\u0441\u044C\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0443.", L = "\u041E\u043A\u0440\u0435\u043C\u0456 \u0430\u0432\u0430\u0442\u0430\u0440\u0438.", N = "\u041E\u0431\u2019\u0454\u0434\u043D\u0430\u043D\u0456 \u0430\u0432\u0430\u0442\u0430\u0440\u0438.", S = "\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0421\u0422\u0420\u0406\u041B\u041A\u0410\u041C\u0418.", C = "\u0411\u0435\u0439\u0434\u0436", D = "{0} \u0437 {1}", P = "\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0442\u0435\u0436\u043A\u0430", B = "\u0411\u0456\u043B\u044C\u0448\u0435", U = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438", t = "\u0417\u0430\u0447\u0435\u043A\u0430\u0439\u0442\u0435", s = "\u041F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F", n = "\u041D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F", o = "\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E", c = "\u0437", M = "\u041F\u043E\u0437\u0438\u0446\u0456\u044F {0} \u0437 {1} \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0430", G = "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430", K = "\u041D\u0430\u0441\u0442\u0443\u043F\u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430", V = "\u041F\u0430\u043B\u0456\u0442\u0440\u0430 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432 - \u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u043A\u043E\u043B\u044C\u043E\u0440\u0438", H = "\u041F\u0430\u043B\u0456\u0442\u0440\u0430 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432", X = "\u041A\u043E\u043B\u0456\u0440", Y = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438", W = "OK", F = "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043A\u043E\u043B\u0456\u0440", Z = "\u0411\u0456\u043B\u044C\u0448\u0435 \u043A\u043E\u043B\u044C\u043E\u0440\u0456\u0432...", e = "\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0410\u043B\u044C\u0444\u0430", a = "\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0440\u0435\u0433\u0443\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0442\u0456\u043D\u043A\u0443", f = "\u0428\u0456\u0441\u0442\u043D\u0430\u0434\u0446\u044F\u0442\u043A\u043E\u0432\u0438\u0439", l = "\u0427\u0435\u0440\u0432\u043E\u043D\u0438\u0439", u = "\u0417\u0435\u043B\u0435\u043D\u0438\u0439", d = "\u0421\u0438\u043D\u0456\u0439", h = "\u0410\u043B\u044C\u0444\u0430", i = "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A", r = "\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0430\u0442\u0438", J = "\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0430\u0442\u0438/\u0447\u0430\u0441\u0443", b = "\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0443 \u0434\u0430\u0442", g = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438", k = "\u041E\u0433\u043B\u044F\u0434...", m = "\u0412\u0438\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B", p = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u0438", x = "\u0421\u043F\u0438\u0441\u043E\u043A", j = "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043E\u043F\u0446\u0456\u0457", q = "\u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456", v = "\u0412\u0438\u0431\u0440\u0430\u0442\u0438", w = "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 1 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", y = "{0} \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E", z = "\u041D\u0435\u043C\u0430\u0454 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432", Q = "\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0439", $ = "\u0412\u0438\u0434\u0456\u043B\u0435\u043D\u043E", EE = "\u041F\u043E\u0437\u0438\u0446\u0456\u044F \u0441\u043F\u0438\u0441\u043A\u0443 {0} \u0437 {1}", _E = "\u0412\u0438\u0431\u0440\u0430\u043D\u0435", TE = "\u041D\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E", AE = "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0440\u0443\u043F\u0438", IE = "\u0420\u0435\u0436\u0438\u043C \u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0431\u043E\u0440\u0443", RE = "\u0412\u0438\u0431\u0456\u0440 \u043F\u043E\u0437\u0438\u0446\u0456\u0457.", OE = "\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0432\u0438\u0431\u043E\u0440\u0443", LE = "\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u043C\u043D\u043E\u0436\u0438\u043D\u043D\u043E\u0433\u043E \u0432\u0438\u0431\u043E\u0440\u0443", NE = "\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F", SE = "\u0417\u0430\u043A\u0440\u0438\u0442\u0442\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456", CE = "\u0417 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044E \u0437\u0430\u043A\u0440\u0438\u0442\u0442\u044F", DE = "\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456", PE = "\u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456", BE = "\u0423\u0441\u043F\u0456\u0445 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0457 \u043F\u0430\u043D\u0435\u043B\u0456", UE = "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u044C", tE = "OK", sE = "\u0426\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0436\u0435 \u0432\u0438\u0431\u0440\u0430\u043D\u043E.", nE = "\u0411\u0430\u0433\u0430\u0442\u043E\u0437\u043D\u0430\u0447\u043D\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F", oE = "\u0429\u0435 {0}", cE = "\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438/\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438", ME = "\u0414\u0456\u0430\u043F\u0430\u0437\u043E\u043D", GE = "\u041B\u0456\u0432\u0438\u0439 \u043F\u043E\u0432\u0437\u0443\u043D\u043E\u043A", KE = "\u041F\u0440\u0430\u0432\u0438\u0439 \u043F\u043E\u0432\u0437\u0443\u043D\u043E\u043A", VE = "\u0420\u0435\u0439\u0442\u0438\u043D\u0433", HE = "\u0406\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0443", XE = "\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438", YE = "\u0413\u0440\u0443\u043F\u0430 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043D\u043E\u043F\u043E\u043A", WE = "\u041D\u0430\u0441\u0442\u0438\u0441\u043D\u0443\u0442\u0438 \u041F\u0420\u041E\u0411\u0406\u041B \u0430\u0431\u043E ENTER \u0434\u043B\u044F \u0432\u0438\u0431\u043E\u0440\u0443 \u043F\u043E\u0437\u0438\u0446\u0456\u0457", FE = "\u0421\u0435\u0433\u043C\u0435\u043D\u0442\u043E\u0432\u0430\u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0430", ZE = "\u041C\u0430\u0440\u043A\u0435\u0440 \u043F\u043E\u0432\u0437\u0443\u043D\u043A\u0430", eE = "\u0411\u0456\u043B\u044C\u0448\u0435", aE = "\u0420\u044F\u0434\u043E\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 1 \u0437 {0}", fE = "{0} \u0437 {1}", lE = "\u0420\u044F\u0434\u043E\u043A \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u043F\u0438", uE = "\u0412\u0438\u0431\u0456\u0440 \u043F\u043E\u0437\u0438\u0446\u0456\u0457", dE = "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0456 \u0440\u044F\u0434\u043A\u0438", hE = "\u041F\u043E\u0440\u043E\u0436\u043D\u0454", iE = "\u0414\u043E\u0434\u0430\u0442\u043D\u0435", rE = "\u0412\u0456\u0434\u2019\u0454\u043C\u043D\u0435", JE = "\u041A\u0440\u0438\u0442\u0438\u0447\u043D\u043E", bE = "\u041D\u0435\u0439\u0442\u0440\u0430\u043B\u044C\u043D\u043E", gE = "\u0412\u043A\u043B\u0430\u0434\u043A\u0430 \u0437 \u043F\u0456\u0434\u043F\u043E\u0437\u0438\u0446\u0456\u044F\u043C\u0438", kE = "\u0414\u0430\u043B\u0456", mE = "\u041D\u0430\u0437\u0430\u0434", pE = "\u041C\u0435\u043D\u044E \u043F\u0435\u0440\u0435\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F", xE = "\u0411\u0456\u043B\u044C\u0448\u0435", jE = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438", qE = "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0443 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u043E\u044E \u0432\u043D\u0438\u0437, \u0449\u043E\u0431 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043C\u0435\u043D\u044E \u043F\u0456\u0434\u043F\u043E\u0437\u0438\u0446\u0456\u0439", vE = "{0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C", wE = "{0} \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 \u0437\u0430 \u043C\u0435\u0436\u0435\u044E", yE = "\u0413\u043E\u0434\u0438\u043D\u0438", zE = "\u0425\u0432\u0438\u043B\u0438\u043D\u0438", QE = "\u0421\u0435\u043A\u0443\u043D\u0434\u0438", $E = "OK", E_ = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438", __ = "\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0447\u0430\u0441\u0443", T_ = "\u0414\u0430\u0442\u0430", A_ = "\u0427\u0430\u0441", I_ = "\u041C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E", R_ = "\u041C\u0456\u0442\u043E\u043A \u043D\u0435\u043C\u0430\u0454", O_ = "\u041C\u0456\u0441\u0442\u0438\u0442\u044C 1 \u043C\u0456\u0442\u043A\u0443", L_ = "\u041C\u0456\u0441\u0442\u0438\u0442\u044C {0} \u043C\u0456\u0442\u043E\u043A", N_ = "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0456\u0442\u043E\u043A", S_ = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438", C_ = "\u0415\u043B\u0435\u043C\u0435\u043D\u0442 \u0434\u0435\u0440\u0435\u0432\u0430", D_ = "\u0420\u043E\u0437\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0432\u0443\u0437\u043E\u043B", P_ = "\u0417\u0433\u043E\u0440\u043D\u0443\u0442\u0438 \u0432\u0443\u0437\u043E\u043B", B_ = "\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u043F\u043E\u043C\u0438\u043B\u043A\u0430", U_ = "\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u0437\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F", t_ = "\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u0443\u0441\u043F\u0456\u0445", s_ = "\u0421\u0442\u0430\u043D \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F: \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F", n_ = "\u041D\u0435\u0434\u0456\u0439\u0441\u043D\u0438\u0439 \u0437\u0430\u043F\u0438\u0441", o_ = "\u0417\u0430\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u0434\u0430\u043D\u043E", c_ = "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0437\u0430\u043F\u0438\u0441", M_ = "\u0417\u0430\u043F\u0438\u0441 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u043E", G_ = "\u0414\u0430\u043B\u0456", K_ = "\u041D\u0430\u0437\u0430\u0434", V_ = "\u041D\u043E\u043C\u0435\u0440 \u0442\u0438\u0436\u043D\u044F", H_ = "\u041D\u0435\u0440\u043E\u0431\u043E\u0447\u0438\u0439 \u0434\u0435\u043D\u044C", X_ = "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456", Y_ = "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A \u043C\u0456\u0441\u044F\u0446\u044F", W_ = "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u0432\u0430\u043B\u044C\u043D\u0438\u043A \u0440\u043E\u043A\u0443", F_ = "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438", Z_ = "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438", e_ = "\u041A\u043D\u043E\u043F\u043A\u0430 \u0440\u043E\u0437\u0434\u0456\u043B\u0435\u043D\u043D\u044F", a_ = "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043A\u043B\u0430\u0432\u0456\u0448\u0443 \u043F\u0440\u043E\u0431\u0456\u043B\u0443 \u0430\u0431\u043E Enter \u0434\u043B\u044F \u0456\u043D\u0456\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0443\u0441\u0442\u0430\u043B\u0435\u043D\u043E\u0457 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457, \u0442\u0430 Alt + \u0441\u0442\u0440\u0456\u043B\u043A\u0430 \u0432\u043D\u0438\u0437 \u0430\u0431\u043E F4 \u0434\u043B\u044F \u0456\u043D\u0456\u0446\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0457 \u0441\u0442\u0440\u0456\u043B\u043A\u0438", f_ = "\u041D\u0430\u0437\u0430\u0434", l_ = "\u0412\u0456\u0434\u0445\u0438\u043B\u0438\u0442\u0438", u_ = "\u0406\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", d_ = "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0456\u0448\u0443 Shift + \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u0440\u043E\u0437\u043C\u0456\u0440\u0443", h_ = "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F", i_ = "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u043D\u044F, \u043A\u043B\u0430\u0432\u0456\u0448\u0443 Shift + \u043A\u043B\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043B\u043A\u0430\u043C\u0438 \u0434\u043B\u044F \u0437\u043C\u0456\u043D\u0438 \u0440\u043E\u0437\u043C\u0456\u0440\u0443", r_ = ":", J_ = {
  ARIA_LABEL_CARD_CONTENT: E,
  ARIA_ROLEDESCRIPTION_CARD: _,
  ARIA_ROLEDESCRIPTION_CARD_HEADER: T,
  ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER: A,
  AVATAR_TOOLTIP: I,
  AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL: R,
  AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL: O,
  AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL: L,
  AVATAR_GROUP_ARIA_LABEL_GROUP: N,
  AVATAR_GROUP_MOVE: S,
  BADGE_DESCRIPTION: C,
  BREADCRUMB_ITEM_POS: D,
  BREADCRUMBS_ARIA_LABEL: P,
  BREADCRUMBS_OVERFLOW_ARIA_LABEL: B,
  BREADCRUMBS_CANCEL_BUTTON: U,
  BUSY_INDICATOR_TITLE: t,
  BUTTON_ARIA_TYPE_ACCEPT: s,
  BUTTON_ARIA_TYPE_REJECT: n,
  BUTTON_ARIA_TYPE_EMPHASIZED: o,
  CAROUSEL_OF_TEXT: c,
  CAROUSEL_DOT_TEXT: M,
  CAROUSEL_PREVIOUS_ARROW_TEXT: G,
  CAROUSEL_NEXT_ARROW_TEXT: K,
  COLORPALETTE_CONTAINER_LABEL: V,
  COLORPALETTE_POPOVER_TITLE: H,
  COLORPALETTE_COLOR_LABEL: X,
  COLOR_PALETTE_DIALOG_CANCEL_BUTTON: Y,
  COLOR_PALETTE_DIALOG_OK_BUTTON: W,
  COLOR_PALETTE_DIALOG_TITLE: F,
  COLOR_PALETTE_MORE_COLORS_TEXT: Z,
  COLORPICKER_ALPHA_SLIDER: e,
  COLORPICKER_HUE_SLIDER: a,
  COLORPICKER_HEX: f,
  COLORPICKER_RED: l,
  COLORPICKER_GREEN: u,
  COLORPICKER_BLUE: d,
  COLORPICKER_ALPHA: h,
  DATEPICKER_OPEN_ICON_TITLE: i,
  DATEPICKER_DATE_DESCRIPTION: r,
  DATETIME_DESCRIPTION: J,
  DATERANGE_DESCRIPTION: b,
  DELETE: g,
  FILEUPLOAD_BROWSE: k,
  FILEUPLOADER_TITLE: m,
  GROUP_HEADER_TEXT: p,
  SELECT_ROLE_DESCRIPTION: x,
  SELECT_OPTIONS: j,
  INPUT_SUGGESTIONS: q,
  INPUT_SUGGESTIONS_TITLE: v,
  INPUT_SUGGESTIONS_ONE_HIT: w,
  INPUT_SUGGESTIONS_MORE_HITS: y,
  INPUT_SUGGESTIONS_NO_HIT: z,
  LINK_SUBTLE: Q,
  LINK_EMPHASIZED: $,
  LIST_ITEM_POSITION: EE,
  LIST_ITEM_SELECTED: _E,
  LIST_ITEM_NOT_SELECTED: TE,
  LIST_ITEM_GROUP_HEADER: AE,
  ARIA_LABEL_LIST_ITEM_CHECKBOX: IE,
  ARIA_LABEL_LIST_ITEM_RADIO_BUTTON: RE,
  ARIA_LABEL_LIST_SELECTABLE: OE,
  ARIA_LABEL_LIST_MULTISELECTABLE: LE,
  ARIA_LABEL_LIST_DELETABLE: NE,
  MESSAGE_STRIP_CLOSE_BUTTON: SE,
  MESSAGE_STRIP_CLOSABLE: CE,
  MESSAGE_STRIP_ERROR: DE,
  MESSAGE_STRIP_WARNING: PE,
  MESSAGE_STRIP_SUCCESS: BE,
  MESSAGE_STRIP_INFORMATION: UE,
  MULTICOMBOBOX_DIALOG_OK_BUTTON: tE,
  VALUE_STATE_ERROR_ALREADY_SELECTED: sE,
  MULTIINPUT_ROLEDESCRIPTION_TEXT: nE,
  MULTIINPUT_SHOW_MORE_TOKENS: oE,
  PANEL_ICON: cE,
  RANGE_SLIDER_ARIA_DESCRIPTION: ME,
  RANGE_SLIDER_START_HANDLE_DESCRIPTION: GE,
  RANGE_SLIDER_END_HANDLE_DESCRIPTION: KE,
  RATING_INDICATOR_TOOLTIP_TEXT: VE,
  RATING_INDICATOR_TEXT: HE,
  RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON: XE,
  SEGMENTEDBUTTON_ARIA_DESCRIPTION: YE,
  SEGMENTEDBUTTON_ARIA_DESCRIBEDBY: WE,
  SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION: FE,
  SLIDER_ARIA_DESCRIPTION: ZE,
  LOAD_MORE_TEXT: eE,
  TABLE_HEADER_ROW_INFORMATION: aE,
  TABLE_ROW_POSITION: fE,
  TABLE_GROUP_ROW_ARIA_LABEL: lE,
  ARIA_LABEL_ROW_SELECTION: uE,
  ARIA_LABEL_SELECT_ALL_CHECKBOX: dE,
  ARIA_LABEL_EMPTY_CELL: hE,
  TAB_ARIA_DESIGN_POSITIVE: iE,
  TAB_ARIA_DESIGN_NEGATIVE: rE,
  TAB_ARIA_DESIGN_CRITICAL: JE,
  TAB_ARIA_DESIGN_NEUTRAL: bE,
  TAB_SPLIT_ROLE_DESCRIPTION: gE,
  TABCONTAINER_NEXT_ICON_ACC_NAME: kE,
  TABCONTAINER_PREVIOUS_ICON_ACC_NAME: mE,
  TABCONTAINER_OVERFLOW_MENU_TITLE: pE,
  TABCONTAINER_END_OVERFLOW: xE,
  TABCONTAINER_POPOVER_CANCEL_BUTTON: jE,
  TABCONTAINER_SUBTABS_DESCRIPTION: qE,
  TEXTAREA_CHARACTERS_LEFT: vE,
  TEXTAREA_CHARACTERS_EXCEEDED: wE,
  TIMEPICKER_HOURS_LABEL: yE,
  TIMEPICKER_MINUTES_LABEL: zE,
  TIMEPICKER_SECONDS_LABEL: QE,
  TIMEPICKER_SUBMIT_BUTTON: $E,
  TIMEPICKER_CANCEL_BUTTON: E_,
  TIMEPICKER_INPUT_DESCRIPTION: __,
  DATETIME_PICKER_DATE_BUTTON: T_,
  DATETIME_PICKER_TIME_BUTTON: A_,
  TOKEN_ARIA_DELETABLE: I_,
  TOKENIZER_ARIA_CONTAIN_TOKEN: R_,
  TOKENIZER_ARIA_CONTAIN_ONE_TOKEN: O_,
  TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS: L_,
  TOKENIZER_ARIA_LABEL: N_,
  TOKENIZER_POPOVER_REMOVE: S_,
  TREE_ITEM_ARIA_LABEL: C_,
  TREE_ITEM_EXPAND_NODE: D_,
  TREE_ITEM_COLLAPSE_NODE: P_,
  VALUE_STATE_TYPE_ERROR: B_,
  VALUE_STATE_TYPE_WARNING: U_,
  VALUE_STATE_TYPE_SUCCESS: t_,
  VALUE_STATE_TYPE_INFORMATION: s_,
  VALUE_STATE_ERROR: n_,
  VALUE_STATE_WARNING: o_,
  VALUE_STATE_INFORMATION: c_,
  VALUE_STATE_SUCCESS: M_,
  CALENDAR_HEADER_NEXT_BUTTON: G_,
  CALENDAR_HEADER_PREVIOUS_BUTTON: K_,
  DAY_PICKER_WEEK_NUMBER_TEXT: V_,
  DAY_PICKER_NON_WORKING_DAY: H_,
  DAY_PICKER_TODAY: X_,
  MONTH_PICKER_DESCRIPTION: Y_,
  YEAR_PICKER_DESCRIPTION: W_,
  STEPINPUT_DEC_ICON_TITLE: F_,
  STEPINPUT_INC_ICON_TITLE: Z_,
  SPLIT_BUTTON_DESCRIPTION: e_,
  SPLIT_BUTTON_KEYBOARD_HINT: a_,
  MENU_BACK_BUTTON_ARIA_LABEL: f_,
  MENU_CLOSE_BUTTON_ARIA_LABEL: l_,
  DIALOG_HEADER_ARIA_ROLE_DESCRIPTION: u_,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE: d_,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE: h_,
  DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE: i_,
  LABEL_COLON: r_
};
export {
  E as ARIA_LABEL_CARD_CONTENT,
  hE as ARIA_LABEL_EMPTY_CELL,
  NE as ARIA_LABEL_LIST_DELETABLE,
  IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,
  RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,
  LE as ARIA_LABEL_LIST_MULTISELECTABLE,
  OE as ARIA_LABEL_LIST_SELECTABLE,
  uE as ARIA_LABEL_ROW_SELECTION,
  dE as ARIA_LABEL_SELECT_ALL_CHECKBOX,
  _ as ARIA_ROLEDESCRIPTION_CARD,
  T as ARIA_ROLEDESCRIPTION_CARD_HEADER,
  A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,
  N as AVATAR_GROUP_ARIA_LABEL_GROUP,
  L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,
  R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,
  S as AVATAR_GROUP_MOVE,
  O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,
  I as AVATAR_TOOLTIP,
  C as BADGE_DESCRIPTION,
  P as BREADCRUMBS_ARIA_LABEL,
  U as BREADCRUMBS_CANCEL_BUTTON,
  B as BREADCRUMBS_OVERFLOW_ARIA_LABEL,
  D as BREADCRUMB_ITEM_POS,
  t as BUSY_INDICATOR_TITLE,
  s as BUTTON_ARIA_TYPE_ACCEPT,
  o as BUTTON_ARIA_TYPE_EMPHASIZED,
  n as BUTTON_ARIA_TYPE_REJECT,
  G_ as CALENDAR_HEADER_NEXT_BUTTON,
  K_ as CALENDAR_HEADER_PREVIOUS_BUTTON,
  M as CAROUSEL_DOT_TEXT,
  K as CAROUSEL_NEXT_ARROW_TEXT,
  c as CAROUSEL_OF_TEXT,
  G as CAROUSEL_PREVIOUS_ARROW_TEXT,
  X as COLORPALETTE_COLOR_LABEL,
  V as COLORPALETTE_CONTAINER_LABEL,
  H as COLORPALETTE_POPOVER_TITLE,
  h as COLORPICKER_ALPHA,
  e as COLORPICKER_ALPHA_SLIDER,
  d as COLORPICKER_BLUE,
  u as COLORPICKER_GREEN,
  f as COLORPICKER_HEX,
  a as COLORPICKER_HUE_SLIDER,
  l as COLORPICKER_RED,
  Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,
  W as COLOR_PALETTE_DIALOG_OK_BUTTON,
  F as COLOR_PALETTE_DIALOG_TITLE,
  Z as COLOR_PALETTE_MORE_COLORS_TEXT,
  r as DATEPICKER_DATE_DESCRIPTION,
  i as DATEPICKER_OPEN_ICON_TITLE,
  b as DATERANGE_DESCRIPTION,
  J as DATETIME_DESCRIPTION,
  T_ as DATETIME_PICKER_DATE_BUTTON,
  A_ as DATETIME_PICKER_TIME_BUTTON,
  H_ as DAY_PICKER_NON_WORKING_DAY,
  X_ as DAY_PICKER_TODAY,
  V_ as DAY_PICKER_WEEK_NUMBER_TEXT,
  g as DELETE,
  h_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE,
  i_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE,
  d_ as DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE,
  u_ as DIALOG_HEADER_ARIA_ROLE_DESCRIPTION,
  m as FILEUPLOADER_TITLE,
  k as FILEUPLOAD_BROWSE,
  p as GROUP_HEADER_TEXT,
  q as INPUT_SUGGESTIONS,
  y as INPUT_SUGGESTIONS_MORE_HITS,
  z as INPUT_SUGGESTIONS_NO_HIT,
  w as INPUT_SUGGESTIONS_ONE_HIT,
  v as INPUT_SUGGESTIONS_TITLE,
  r_ as LABEL_COLON,
  $ as LINK_EMPHASIZED,
  Q as LINK_SUBTLE,
  AE as LIST_ITEM_GROUP_HEADER,
  TE as LIST_ITEM_NOT_SELECTED,
  EE as LIST_ITEM_POSITION,
  _E as LIST_ITEM_SELECTED,
  eE as LOAD_MORE_TEXT,
  f_ as MENU_BACK_BUTTON_ARIA_LABEL,
  l_ as MENU_CLOSE_BUTTON_ARIA_LABEL,
  CE as MESSAGE_STRIP_CLOSABLE,
  SE as MESSAGE_STRIP_CLOSE_BUTTON,
  DE as MESSAGE_STRIP_ERROR,
  UE as MESSAGE_STRIP_INFORMATION,
  BE as MESSAGE_STRIP_SUCCESS,
  PE as MESSAGE_STRIP_WARNING,
  Y_ as MONTH_PICKER_DESCRIPTION,
  tE as MULTICOMBOBOX_DIALOG_OK_BUTTON,
  nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,
  oE as MULTIINPUT_SHOW_MORE_TOKENS,
  cE as PANEL_ICON,
  ME as RANGE_SLIDER_ARIA_DESCRIPTION,
  KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,
  GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,
  HE as RATING_INDICATOR_TEXT,
  VE as RATING_INDICATOR_TOOLTIP_TEXT,
  XE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,
  FE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,
  WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,
  YE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,
  j as SELECT_OPTIONS,
  x as SELECT_ROLE_DESCRIPTION,
  ZE as SLIDER_ARIA_DESCRIPTION,
  e_ as SPLIT_BUTTON_DESCRIPTION,
  a_ as SPLIT_BUTTON_KEYBOARD_HINT,
  F_ as STEPINPUT_DEC_ICON_TITLE,
  Z_ as STEPINPUT_INC_ICON_TITLE,
  xE as TABCONTAINER_END_OVERFLOW,
  kE as TABCONTAINER_NEXT_ICON_ACC_NAME,
  pE as TABCONTAINER_OVERFLOW_MENU_TITLE,
  jE as TABCONTAINER_POPOVER_CANCEL_BUTTON,
  mE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,
  qE as TABCONTAINER_SUBTABS_DESCRIPTION,
  lE as TABLE_GROUP_ROW_ARIA_LABEL,
  aE as TABLE_HEADER_ROW_INFORMATION,
  fE as TABLE_ROW_POSITION,
  JE as TAB_ARIA_DESIGN_CRITICAL,
  rE as TAB_ARIA_DESIGN_NEGATIVE,
  bE as TAB_ARIA_DESIGN_NEUTRAL,
  iE as TAB_ARIA_DESIGN_POSITIVE,
  gE as TAB_SPLIT_ROLE_DESCRIPTION,
  wE as TEXTAREA_CHARACTERS_EXCEEDED,
  vE as TEXTAREA_CHARACTERS_LEFT,
  E_ as TIMEPICKER_CANCEL_BUTTON,
  yE as TIMEPICKER_HOURS_LABEL,
  __ as TIMEPICKER_INPUT_DESCRIPTION,
  zE as TIMEPICKER_MINUTES_LABEL,
  QE as TIMEPICKER_SECONDS_LABEL,
  $E as TIMEPICKER_SUBMIT_BUTTON,
  O_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,
  L_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,
  R_ as TOKENIZER_ARIA_CONTAIN_TOKEN,
  N_ as TOKENIZER_ARIA_LABEL,
  S_ as TOKENIZER_POPOVER_REMOVE,
  I_ as TOKEN_ARIA_DELETABLE,
  C_ as TREE_ITEM_ARIA_LABEL,
  P_ as TREE_ITEM_COLLAPSE_NODE,
  D_ as TREE_ITEM_EXPAND_NODE,
  n_ as VALUE_STATE_ERROR,
  sE as VALUE_STATE_ERROR_ALREADY_SELECTED,
  c_ as VALUE_STATE_INFORMATION,
  M_ as VALUE_STATE_SUCCESS,
  B_ as VALUE_STATE_TYPE_ERROR,
  s_ as VALUE_STATE_TYPE_INFORMATION,
  t_ as VALUE_STATE_TYPE_SUCCESS,
  U_ as VALUE_STATE_TYPE_WARNING,
  o_ as VALUE_STATE_WARNING,
  W_ as YEAR_PICKER_DESCRIPTION,
  J_ as default
};
