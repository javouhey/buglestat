// assumes d3 is loaded
var ds1 = [
    {
        "created_at": "2012/01/17 10:46:54 +0000", 
        "download_count": 1147, 
        "playback_count": 124065, 
        "title": "Hello Buglers!"
    }, 
    {
        "created_at": "2012/01/20 22:06:27 +0000", 
        "download_count": 6900, 
        "playback_count": 220037, 
        "title": "Bugle 179 - Playas gon play"
    }, 
    {
        "created_at": "2012/01/28 01:09:47 +0000", 
        "download_count": 2893, 
        "playback_count": 158187, 
        "title": "Bugle 180 - The truth about lies"
    }, 
    {
        "created_at": "2012/02/03 21:35:01 +0000", 
        "download_count": 3132, 
        "playback_count": 154010, 
        "title": "Bugle 181 - A Knight's Fail"
    }, 
    {
        "created_at": "2012/02/11 01:22:07 +0000", 
        "download_count": 2928, 
        "playback_count": 150433, 
        "title": "Bugle 182 - Stockpiling Humanity"
    }, 
    {
        "created_at": "2012/02/18 00:54:32 +0000", 
        "download_count": 2878, 
        "playback_count": 151335, 
        "title": "Bugle 183 - Bugle Lady Special"
    }, 
    {
        "created_at": "2012/02/24 21:20:21 +0000", 
        "download_count": 2724, 
        "playback_count": 146066, 
        "title": "Bugle 184 - Wangderlust"
    }, 
    {
        "created_at": "2012/03/02 21:28:10 +0000", 
        "download_count": 2652, 
        "playback_count": 147018, 
        "title": "Bugle 185 - Burning Rings Of Steel"
    }, 
    {
        "created_at": "2012/03/09 22:50:21 +0000", 
        "download_count": 2921, 
        "playback_count": 153511, 
        "title": "Bugle 186 - An Insult to Civic Society"
    }, 
    {
        "created_at": "2012/03/16 20:23:04 +0000", 
        "download_count": 3361, 
        "playback_count": 149403, 
        "title": "Bugle 187 - The President's Playlist"
    }, 
    {
        "created_at": "2012/03/23 19:48:30 +0000", 
        "download_count": 1621, 
        "playback_count": 123860, 
        "title": "The Bugle Q&A, vol 1"
    }, 
    {
        "created_at": "2012/03/30 22:08:29 +0000", 
        "download_count": 3115, 
        "playback_count": 140709, 
        "title": "Bugle 188 - Gentlemen, start your engines!"
    }, 
    {
        "created_at": "2012/04/06 23:27:31 +0000", 
        "download_count": 3101, 
        "playback_count": 141166, 
        "title": "Bugle 189 - 'Like eating Bill Cosby'"
    }, 
    {
        "created_at": "2012/04/13 19:58:36 +0000", 
        "download_count": 3221, 
        "playback_count": 141907, 
        "title": "Bugle 190 - Santorum splashes out"
    }, 
    {
        "created_at": "2012/04/20 20:21:59 +0000", 
        "download_count": 3389, 
        "playback_count": 143809, 
        "title": "Bugle 191 - A secret servicing"
    }, 
    {
        "created_at": "2012/04/27 21:08:18 +0000", 
        "download_count": 3514, 
        "playback_count": 142961, 
        "title": "Bugle 192 - Uncle Rupert is the real victim"
    }, 
    {
        "created_at": "2012/05/04 20:49:55 +0000", 
        "download_count": 3513, 
        "playback_count": 143022, 
        "title": "Bugle 193 - Happy Deathiversary!"
    }, 
    {
        "created_at": "2012/05/12 08:34:55 +0000", 
        "download_count": 3784, 
        "playback_count": 140047, 
        "title": "Bugle 194 - Global Election Round Up"
    }, 
    {
        "created_at": "2012/05/16 16:22:45 +0000", 
        "download_count": 1483, 
        "playback_count": 126988, 
        "title": "The Bugle - 194a - Too Good For Context"
    }, 
    {
        "created_at": "2012/05/25 17:56:55 +0000", 
        "download_count": 2994, 
        "playback_count": 139903, 
        "title": "Bugle 195 - A drop of Reagan's Blood"
    }, 
    {
        "created_at": "2012/06/01 20:46:51 +0000", 
        "download_count": 3269, 
        "playback_count": 143876, 
        "title": "Bugle 196 - Jubilee Special"
    }, 
    {
        "created_at": "2012/06/08 19:35:34 +0000", 
        "download_count": 3324, 
        "playback_count": 144534, 
        "title": "Bugle 197 - Singing in the Reign"
    }, 
    {
        "created_at": "2012/06/15 15:46:57 +0000", 
        "download_count": 3491, 
        "playback_count": 142136, 
        "title": "Bugle 198 - Warm up and melt down"
    }, 
    {
        "created_at": "2012/06/22 18:31:50 +0000", 
        "download_count": 3626, 
        "playback_count": 150520, 
        "title": "Bugle 199 - This is an ex-president!"
    }, 
    {
        "created_at": "2012/06/29 14:39:48 +0000", 
        "download_count": 2144, 
        "playback_count": 130402, 
        "title": "The Bugle - John Oliver Speaks"
    }, 
    {
        "created_at": "2012/07/06 17:19:52 +0000", 
        "download_count": 1830, 
        "playback_count": 122374, 
        "title": "The Bugle - Andy Zaltzman Speaks"
    }, 
    {
        "created_at": "2012/07/13 19:24:47 +0000", 
        "download_count": 3988, 
        "playback_count": 148915, 
        "title": "Bugle 200 - The horn dog returneth!"
    }, 
    {
        "created_at": "2012/07/20 21:59:46 +0000", 
        "download_count": 3593, 
        "playback_count": 146282, 
        "title": "Bugle 201 - Dirty bankers"
    }, 
    {
        "created_at": "2012/07/27 20:49:00 +0000", 
        "download_count": 3501, 
        "playback_count": 124346, 
        "title": "Bugle 202 - Sport!"
    }, 
    {
        "created_at": "2012/07/28 12:20:51 +0000", 
        "download_count": 1621, 
        "playback_count": 71449, 
        "title": "Bugle London 2012 #1"
    }, 
    {
        "created_at": "2012/07/29 10:43:05 +0000", 
        "download_count": 1469, 
        "playback_count": 67340, 
        "title": "Bugle London 2012 #2"
    }, 
    {
        "created_at": "2012/07/30 09:06:08 +0000", 
        "download_count": 1376, 
        "playback_count": 65267, 
        "title": "Bugle London 2012 #3"
    }, 
    {
        "created_at": "2012/07/31 11:18:54 +0000", 
        "download_count": 1340, 
        "playback_count": 61006, 
        "title": "Bugle London 2012 #4"
    }, 
    {
        "created_at": "2012/08/01 07:19:41 +0000", 
        "download_count": 1326, 
        "playback_count": 60331, 
        "title": "Bugle London 2012 #5"
    }, 
    {
        "created_at": "2012/08/02 09:56:17 +0000", 
        "download_count": 1312, 
        "playback_count": 62238, 
        "title": "Bugle London 2012 #6"
    }, 
    {
        "created_at": "2012/08/03 20:21:31 +0000", 
        "download_count": 3609, 
        "playback_count": 137886, 
        "title": "Bugle 203 - No medals for Syria"
    }, 
    {
        "created_at": "2012/08/05 14:41:04 +0000", 
        "download_count": 1327, 
        "playback_count": 63372, 
        "title": "Bugle London 2012 #7"
    }, 
    {
        "created_at": "2012/08/07 18:06:55 +0000", 
        "download_count": 1201, 
        "playback_count": 51659, 
        "title": "Bugle London 2012 #8"
    }, 
    {
        "created_at": "2012/08/08 17:30:21 +0000", 
        "download_count": 1163, 
        "playback_count": 47446, 
        "title": "Bugle London 2012 #9"
    }, 
    {
        "created_at": "2012/08/09 09:27:00 +0000", 
        "download_count": 1163, 
        "playback_count": 53540, 
        "title": "Bugle London 2012 #10"
    }, 
    {
        "created_at": "2012/08/10 21:39:51 +0000", 
        "download_count": 3625, 
        "playback_count": 133565, 
        "title": "Bugle 204 - What the Feck"
    }, 
    {
        "created_at": "2012/08/11 14:40:58 +0000", 
        "download_count": 1155, 
        "playback_count": 61380, 
        "title": "Bugle London 2012 #11"
    }, 
    {
        "created_at": "2012/08/14 11:31:25 +0000", 
        "download_count": 1143, 
        "playback_count": 56651, 
        "title": "Bugle London 2012 #12"
    }, 
    {
        "created_at": "2012/08/17 21:48:41 +0000", 
        "download_count": 3470, 
        "playback_count": 160311, 
        "title": "Bugle 205 - The Trojan Horse"
    }, 
    {
        "created_at": "2012/09/01 23:19:26 +0000", 
        "download_count": 1162, 
        "playback_count": 88010, 
        "title": "The Bugle - Paralympic update"
    }, 
    {
        "created_at": "2012/09/08 20:50:21 +0000", 
        "download_count": 1280, 
        "playback_count": 87403, 
        "title": "Bugle methadone fix"
    }, 
    {
        "created_at": "2012/09/15 08:18:57 +0000", 
        "download_count": 1240, 
        "playback_count": 88663, 
        "title": "The Bugle Quiz!"
    }, 
    {
        "created_at": "2012/09/21 18:35:56 +0000", 
        "download_count": 3619, 
        "playback_count": 152651, 
        "title": "Bugle 206 - The President is not a gremlin"
    }, 
    {
        "created_at": "2012/09/28 19:10:57 +0000", 
        "download_count": 3355, 
        "playback_count": 151782, 
        "title": "Bugle 207 - UN-believable"
    }, 
    {
        "created_at": "2012/10/05 23:37:42 +0000", 
        "download_count": 3646, 
        "playback_count": 169931, 
        "title": "Bugle 208 - A Kama Sutra approach to the truth"
    }, 
    {
        "created_at": "2012/10/14 21:40:31 +0000", 
        "download_count": 3214, 
        "playback_count": 149395, 
        "title": "Bugle 209 - 5th Birthday Edition"
    }, 
    {
        "created_at": "2012/10/19 20:49:43 +0000", 
        "download_count": 2970, 
        "playback_count": 156978, 
        "title": "Bugle 210 - Punch up for President!"
    }, 
    {
        "created_at": "2012/10/26 18:27:06 +0000", 
        "download_count": 3344, 
        "playback_count": 151706, 
        "title": "Bugle 211 - Electoral Labour"
    }, 
    {
        "created_at": "2012/11/02 19:45:43 +0000", 
        "download_count": 3664, 
        "playback_count": 163010, 
        "title": "Bugle 212 - Wind of change"
    }, 
    {
        "created_at": "2012/11/09 20:43:26 +0000", 
        "download_count": 3939, 
        "playback_count": 161864, 
        "title": "Bugle 213 - Free At Last!"
    }, 
    {
        "created_at": "2012/11/16 19:20:54 +0000", 
        "download_count": 3756, 
        "playback_count": 162978, 
        "title": "Bugle 214 - A Few Bad Men"
    }, 
    {
        "created_at": "2012/11/23 16:34:26 +0000", 
        "download_count": 2069, 
        "playback_count": 156088, 
        "title": "The Bugle - The Producer Chris Podcast"
    }, 
    {
        "created_at": "2012/11/30 19:36:43 +0000", 
        "download_count": 3566, 
        "playback_count": 156747, 
        "title": "Bugle 215 - Let's Nuke The Moon!"
    }, 
    {
        "created_at": "2012/12/07 21:02:47 +0000", 
        "download_count": 2643, 
        "playback_count": 144695, 
        "title": "Bugle 216 - We're having a baby!"
    }, 
    {
        "created_at": "2012/12/14 18:44:34 +0000", 
        "download_count": 3542, 
        "playback_count": 165847, 
        "title": "Bugle 217 - Silvio's Christmas Gift"
    }, 
    {
        "created_at": "2012/12/21 15:31:31 +0000", 
        "download_count": 2896, 
        "playback_count": 168061, 
        "title": "The Bugle - The complete 2012 - Part 1"
    }, 
    {
        "created_at": "2012/12/29 13:03:56 +0000", 
        "download_count": 1220, 
        "playback_count": 138187, 
        "title": "The Bugle - The Complete 2012 - Part 2"
    }, 
    {
        "created_at": "2013/01/04 18:31:25 +0000", 
        "download_count": 3396, 
        "playback_count": 155799, 
        "title": "Bugle 218 - Cliff Diving"
    }, 
    {
        "created_at": "2013/01/11 19:56:52 +0000", 
        "download_count": 3520, 
        "playback_count": 161288, 
        "title": "Bugle 219 - 5th versus 1st"
    }, 
    {
        "created_at": "2013/01/20 12:07:21 +0000", 
        "download_count": 3416, 
        "playback_count": 154504, 
        "title": "Bugle 220 - The Cheat Hits The Fan"
    }, 
    {
        "created_at": "2013/01/25 20:16:57 +0000", 
        "download_count": 3522, 
        "playback_count": 162350, 
        "title": "Bugle 221 - Do EU really love Us?"
    }, 
    {
        "created_at": "2013/02/03 22:22:52 +0000", 
        "download_count": 3082, 
        "playback_count": 144680, 
        "title": "Bugle 222 - Halfrica"
    }, 
    {
        "created_at": "2013/02/08 18:47:04 +0000", 
        "download_count": 3577, 
        "playback_count": 154855, 
        "title": "Bugle 223 - Invasion of the Asylugrants"
    }, 
    {
        "created_at": "2013/02/15 18:11:14 +0000", 
        "download_count": 3417, 
        "playback_count": 159149, 
        "title": "Bugle 224 - Papal Proton Packs"
    }, 
    {
        "created_at": "2013/02/22 18:15:32 +0000", 
        "download_count": 4054, 
        "playback_count": 165397, 
        "title": "Bugle 225 - Waffles are forever"
    }, 
    {
        "created_at": "2013/03/01 17:51:36 +0000", 
        "download_count": 3427, 
        "playback_count": 154145, 
        "title": "Bugle 226 - Salvo For Mali"
    }, 
    {
        "created_at": "2013/03/08 18:48:51 +0000", 
        "download_count": 3877, 
        "playback_count": 167046, 
        "title": "Bugle 227 - Farewell Bush's Muse"
    }, 
    {
        "created_at": "2013/03/15 19:11:59 +0000", 
        "download_count": 3624, 
        "playback_count": 164752, 
        "title": "Bugle 228 - Rome's most eligible bachelor"
    }, 
    {
        "created_at": "2013/03/22 19:00:56 +0000", 
        "download_count": 3636, 
        "playback_count": 157851, 
        "title": "Bugle 229 - Cyprus ready to go Mad Max"
    }, 
    {
        "created_at": "2013/03/29 12:10:57 +0000", 
        "download_count": 2669, 
        "playback_count": 142624, 
        "title": "The Bugle - The worst bits of 2013 (so far)"
    }, 
    {
        "created_at": "2013/04/05 16:39:43 +0000", 
        "download_count": 1630, 
        "playback_count": 131582, 
        "title": "Bugle Q&A - Andy Zaltor Zaltzman"
    }, 
    {
        "created_at": "2013/04/14 21:04:49 +0000", 
        "download_count": 3749, 
        "playback_count": 148311, 
        "title": "The Bugle - The Baroness bows out"
    }, 
    {
        "created_at": "2013/04/19 17:25:33 +0000", 
        "download_count": 3772, 
        "playback_count": 154979, 
        "title": "Bugle 231 - The Queen should play poker"
    }, 
    {
        "created_at": "2013/04/26 18:24:28 +0000", 
        "download_count": 3889, 
        "playback_count": 151691, 
        "title": "Bugle 232 - Mars, Merchandise and Mad Men!"
    }, 
    {
        "created_at": "2013/05/03 18:35:59 +0000", 
        "download_count": 3605, 
        "playback_count": 152233, 
        "title": "Bugle 233 - Baby got hack"
    }, 
    {
        "created_at": "2013/05/10 18:03:37 +0000", 
        "download_count": 4266, 
        "playback_count": 157296, 
        "title": "Bugle 234 - Nuns, guns and nutters"
    }, 
    {
        "created_at": "2013/05/17 17:01:58 +0000", 
        "download_count": 3190, 
        "playback_count": 154280, 
        "title": "Bugle 235 - The long arm of the lorry"
    }, 
    {
        "created_at": "2013/05/24 17:46:17 +0000", 
        "download_count": 3874, 
        "playback_count": 156162, 
        "title": "Bugle 236 - Tennis racquet marries guinea pig"
    }, 
    {
        "created_at": "2013/05/31 17:41:38 +0000", 
        "download_count": 1985, 
        "playback_count": 128778, 
        "title": "Bonus Bugle - Andy in Norway"
    }, 
    {
        "created_at": "2013/06/07 19:22:40 +0000", 
        "download_count": 3718, 
        "playback_count": 154975, 
        "title": "Bugle 237 - Istanbul's hit"
    }, 
    {
        "created_at": "2013/06/14 19:48:31 +0000", 
        "download_count": 4013, 
        "playback_count": 153686, 
        "title": "Bugle 238 - Inprismed"
    }, 
    {
        "created_at": "2013/06/21 21:17:54 +0000", 
        "download_count": 3590, 
        "playback_count": 153033, 
        "title": "Bugle 239 - Goodness Gracious G8 Balls Of Tennis"
    }, 
    {
        "created_at": "2013/06/28 19:02:46 +0000", 
        "download_count": 3764, 
        "playback_count": 147243, 
        "title": "Bugle 240 - Political Gooaaalllsss!!"
    }, 
    {
        "created_at": "2013/07/05 17:25:48 +0000", 
        "download_count": 2371, 
        "playback_count": 132642, 
        "title": "Bonus Bugle - Jet Skis, lawyers and donations"
    }, 
    {
        "created_at": "2013/07/12 19:04:12 +0000", 
        "download_count": 1415, 
        "playback_count": 118469, 
        "title": "Bugle Bulge Beluga Legume Bleurgh!"
    }, 
    {
        "created_at": "2013/07/17 08:51:13 +0000", 
        "download_count": 858, 
        "playback_count": 124168, 
        "title": "Bonus Bugle - The Story of Wills and Kate"
    }, 
    {
        "created_at": "2013/07/19 18:23:16 +0000", 
        "download_count": 3558, 
        "playback_count": 150171, 
        "title": "Bugle 241 - Motown breaks down"
    }, 
    {
        "created_at": "2013/07/26 14:36:58 +0000", 
        "download_count": 3339, 
        "playback_count": 145804, 
        "title": "Bugle 242 - Woman gives birth!"
    }, 
    {
        "created_at": "2013/08/02 17:16:16 +0000", 
        "download_count": 3698, 
        "playback_count": 156547, 
        "title": "Bugle 243 - The gifts that keep giving"
    }, 
    {
        "created_at": "2013/08/09 18:00:34 +0000", 
        "download_count": 4123, 
        "playback_count": 169760, 
        "title": "Bugle 244 - Russian into battle"
    }, 
    {
        "created_at": "2013/08/19 08:03:21 +0000", 
        "download_count": 997, 
        "playback_count": 143772, 
        "title": "Bonus Bugle - Guide to Parenting"
    }, 
    {
        "created_at": "2013/08/30 13:27:04 +0000", 
        "download_count": 718, 
        "playback_count": 123448, 
        "title": "Bugle Elbug Snug in a Rug, Doug"
    }, 
    {
        "created_at": "2013/09/06 18:39:39 +0000", 
        "download_count": 3672, 
        "playback_count": 156702, 
        "title": "Bugle 245 - Syria, too complicated for 5 year olds"
    }, 
    {
        "created_at": "2013/09/13 21:25:28 +0000", 
        "download_count": 1733, 
        "playback_count": 167443, 
        "title": "Bugle 246 - Selling The Drama (And War and Guns And The Planet)"
    }, 
    {
        "created_at": "2013/09/22 20:58:11 +0000", 
        "download_count": 3513, 
        "playback_count": 157717, 
        "title": "Bugle 247 - Mind The Gap!"
    }, 
    {
        "created_at": "2013/09/27 18:46:47 +0000", 
        "download_count": 875, 
        "playback_count": 136612, 
        "title": "A Satirist for hire"
    }, 
    {
        "created_at": "2013/10/04 16:42:31 +0000", 
        "download_count": 3376, 
        "playback_count": 164894, 
        "title": "Bugle 248 - Anarchy in the USA"
    }, 
    {
        "created_at": "2013/10/13 14:00:22 +0000", 
        "download_count": 3479, 
        "playback_count": 164122, 
        "title": "Bugle 249 - America stands that little bit smaller"
    }, 
    {
        "created_at": "2013/10/26 11:06:10 +0000", 
        "download_count": 736, 
        "playback_count": 131153, 
        "title": "Bugle 250 minus a half - more satirist for hire"
    }, 
    {
        "created_at": "2013/11/01 19:16:17 +0000", 
        "download_count": 3084, 
        "playback_count": 168317, 
        "title": "Bugle 250 - No one is madder than Obama..."
    }, 
    {
        "created_at": "2013/11/09 09:46:41 +0000", 
        "download_count": 509, 
        "playback_count": 118703, 
        "title": "Sub-episode: A Bugle Call To Action!"
    }, 
    {
        "created_at": "2013/11/15 18:03:46 +0000", 
        "download_count": 2606, 
        "playback_count": 150794, 
        "title": "Bugle 251 - Nailing the truth to the floor"
    }, 
    {
        "created_at": "2013/11/22 21:39:21 +0000", 
        "download_count": 583, 
        "playback_count": 116890, 
        "title": "Bonus Bugle - Bugle requests"
    }
];

/**
  (a) any way to deep clone an array in JS ?
  (b) ..
 */

/**
 * @enum {Number}
 */
var graphType = Object.freeze({ DOWNLOADS: 0, PLAYBACK: 1 }); 

var fmt = d3.time.format("%Y/%m/%d %H:%M:%S +0000");

/**
 * Adds properties "x" and "y" depending on which graphs.
 * 
 * @param {Number} type - use enum  
 * @returns {Array} - of objects with properties (a) "x" (b) "y".
 */
function loadChartData(type) {
    if (graphType.DOWNLOADS === type) {
        var l = ds1.length;  
        for (var i=0; i<l; i++) {
            //"created_at": "2012/01/17 10:46:54 +0000", 
            //"download_count": 1147, 
            var o = ds1[i];
            o.y = o.download_count;
            o.x = (fmt.parse(o.created_at)).getTime();
        }
        return ds1;
    }

    if (graphType.PLAYBACK === type) {
        var l = ds1.length;  
        for (var i=0; i<l; i++) {
            //"created_at": "2012/01/17 10:46:54 +0000", 
            //"playback_count": 124065, 
            var o = ds1[i];
            o.y = o.playback_count;
            o.x = (fmt.parse(o.created_at)).getTime();
        }
        return ds1;
    }

    return [];
};

